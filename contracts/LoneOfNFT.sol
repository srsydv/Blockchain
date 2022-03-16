// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";


contract LoneOfNFT is IERC721Receiver,Ownable,Pausable {
      // Internel Logic to remove abstract error
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
    
    enum Status { PENDING, ACTIVE, CANCELLED, ENDED, DEFAULTED }

    struct Lone {
        uint loneID;
        address payable lender;
        address payable borrower;
        address smartContractAddressOfNFT;
        uint tokenIdNFT;
        uint loanAmount;
        uint interestAmount;
        uint totalTimePeriod;
        uint maxTimePeriod;
        uint endLoneTimePeriod;
        Status status;
    }

    using SafeMath for uint;
    mapping(uint => Lone) allLoansDetails;
    uint totalLone;

    address public manager;
    constructor() {
            manager = msg.sender;
            totalLone = 0;
    }
    modifier onlyManager() { // Modifier
        require(
            msg.sender == manager,
            "Only manager can call this."
        );
        _;
    }


    function pauseLones() public onlyManager {
        _pause();
    }
    function unpauseLones() public onlyManager {
        _unpause();
    }

    event DetailsOfLoanData(address from, uint loneID, uint loanAmount, uint interestAmount, uint totalTimePeriod, uint extendTimePeriod, Status status);

    function createLoan(address smartContractAddressOfNFT, uint tokenIdNFT, uint loanAmount, uint interestAmount, uint totalTimePeriod, uint maxTimePeriod) public whenNotPaused{
        require(totalTimePeriod <= 31 days, "Total time period can be only 31 days");
        require(maxTimePeriod <= 10 days, "Extend time period can be only 10 days");
        require(maxTimePeriod > 0 days, "Minimum Extend time period can be only 0 days");

        IERC721 curruntNFTaddress = IERC721(smartContractAddressOfNFT); 
        require(curruntNFTaddress.getApproved(tokenIdNFT) == address(this), "Token ID of NFT has to be approve first");
        Lone storage loanrequest = allLoansDetails[totalLone];
        loanrequest.loneID = totalLone;
        loanrequest.lender = payable (address(0x0));
        loanrequest.borrower = payable(msg.sender);
        loanrequest.smartContractAddressOfNFT = smartContractAddressOfNFT;
        loanrequest.tokenIdNFT = tokenIdNFT;
        loanrequest.loanAmount = loanAmount;
        loanrequest.interestAmount = interestAmount;
        loanrequest.totalTimePeriod = totalTimePeriod;
        loanrequest.maxTimePeriod = maxTimePeriod;
        loanrequest.status = Status.PENDING;

        emit DetailsOfLoanData(msg.sender, totalLone, loanrequest.loanAmount, loanrequest.interestAmount, loanrequest.totalTimePeriod,loanrequest.maxTimePeriod, loanrequest.status);
        SafeMath.add(totalLone, 1);

        curruntNFTaddress.safeTransferFrom(msg.sender, address(this), tokenIdNFT);
    }

    // modifier validloneID(uint loneID){
    //     require(loneID < totalLone, "Loan ID is not valid");
    //     _;
    // }

    address public shrishwalletAddress = 0xF7D3bdf086d66E548c945CA410BB80Fc00E49831;

    event DetailsOfLoanAcceptData(address from, uint loneID, uint loanAmount, uint interestAmount, uint endLoneTimePeriod, Status status);

    function acceptLoan(uint loneID) payable public whenNotPaused {
        require(allLoansDetails[loneID].status == Status.PENDING, "Status is not pending for loan");
        require(allLoansDetails[loneID].borrower != msg.sender, "You can not accept your own loan");
        require(msg.value >= allLoansDetails[loneID].loanAmount, "You are not sending enough Amount");
        allLoansDetails[loneID].lender = payable(msg.sender);
        allLoansDetails[loneID].status = Status.ACTIVE;
        allLoansDetails[loneID].endLoneTimePeriod = SafeMath.add(block.timestamp, allLoansDetails[loneID].totalTimePeriod);
        uint amountOfLone = allLoansDetails[loneID].loanAmount;
        uint share = amountOfLone.mul(25).div(1000);
        address payable shrishAC = payable(shrishwalletAddress);
        shrishAC.transfer(share);
        emit DetailsOfLoanAcceptData(allLoansDetails[loneID].lender, loneID, allLoansDetails[loneID].loanAmount, allLoansDetails[loneID].interestAmount, allLoansDetails[loneID].endLoneTimePeriod, allLoansDetails[loneID].status);
        allLoansDetails[loneID].borrower.transfer(allLoansDetails[loneID].loanAmount - share);
    }

    

    event DetailofLoneOnExtend(uint loneID, uint endLoneTimePeriod, Status status);

    function LoanExtend(uint loneID) payable public whenNotPaused {
        require(allLoansDetails[loneID].status == Status.ACTIVE, "Status is not Active for loan");
        require(allLoansDetails[loneID].borrower == msg.sender, "Only the borrower can Extend");
        require(allLoansDetails[loneID].maxTimePeriod > 0, "The maximum number of extensions to the loan has been reached.");
        allLoansDetails[loneID].endLoneTimePeriod = SafeMath.add(allLoansDetails[loneID].endLoneTimePeriod, allLoansDetails[loneID].totalTimePeriod);
        emit DetailofLoneOnExtend(loneID, allLoansDetails[loneID].endLoneTimePeriod, allLoansDetails[loneID].status);
    }

    event DetailofLoneOnEnd(uint loneID, Status status);

    function endLone(uint loneID) payable public {
        require(allLoansDetails[loneID].status == Status.ACTIVE, "Status is not Active for loan");
        require(msg.sender == allLoansDetails[loneID].borrower, "only borrower can end this");
        require(msg.sender == allLoansDetails[loneID].lender && block.timestamp >= allLoansDetails[loneID].endLoneTimePeriod, "you can not end the lone before End Time");
        if(msg.sender == allLoansDetails[loneID].borrower){
            uint abountobereturn = allLoansDetails[loneID].loanAmount + allLoansDetails[loneID].interestAmount;
            require(msg.value >= abountobereturn, "You are not sending the Total amount");
            allLoansDetails[loneID].status = Status.ENDED;
            allLoansDetails[loneID].lender.transfer(abountobereturn);
        }
        else {
            allLoansDetails[loneID].status = Status.DEFAULTED;
        }
        IERC721 curruntNFTaddress = IERC721(allLoansDetails[loneID].smartContractAddressOfNFT); 
        curruntNFTaddress.approve(msg.sender, allLoansDetails[loneID].tokenIdNFT);
        emit DetailofLoneOnEnd(loneID, allLoansDetails[loneID].status);
        curruntNFTaddress.transferFrom(address(this), msg.sender, allLoansDetails[loneID].tokenIdNFT);
    }


    event DetailofLoneOnCancle(uint loneID, Status status);
    function cancelLone(uint loneID) public {
        require(allLoansDetails[loneID].status == Status.PENDING, "Status is not Pending for loan");
        require(msg.sender == allLoansDetails[loneID].borrower, "only borrower can cancle this");
        allLoansDetails[loneID].status = Status.CANCELLED;
        IERC721 curruntNFTaddress = IERC721(allLoansDetails[loneID].smartContractAddressOfNFT); 
        curruntNFTaddress.approve(msg.sender, allLoansDetails[loneID].tokenIdNFT);
        emit DetailofLoneOnCancle(loneID, allLoansDetails[loneID].status);
        curruntNFTaddress.transferFrom(address(this), msg.sender, allLoansDetails[loneID].tokenIdNFT);

    }

}