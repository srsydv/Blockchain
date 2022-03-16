// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";

enum Status { PENDING, ACTIVE, CANCELLED, ENDED, DEFAULTED }

struct Lone {
    uint loanID,
    address payable lender,
    address payable borrower,
    uint smartContractAddressOfNFT,
    uint tokenIdNFT,
    uint loanAmount,
    uint interestAmount,
    uint totalTimePeriod,
    uint maxTimePeriod,
    uint endLoneTimePeriod,
    Status status, 
}

mapping(uint => Loan) public allLoansDetails;
uint public totalLone;


constructor() {
        manager = msg.sender;
        totalLoan = 0;
}

function pauseLones() public onlyManager {
    _pause();
}
function unpauseLones() public onlyManager {
    _unpause();
}

event DetailsOfLoanData(address from, uint loadId, uint loanAmount, uint interestAmount, uint totalTimePeriod, uint extendTimePeriod, Status status);

function createLoan(address smartContractAddressOfNFT, uint tokenIdNFT, uint loanAmount, uint interestAmount, uint totalTimePeriod, uint maxTimePeriod) public whenNotPaused{
    require(totalTimePeriod <= 31 days, "Total time period can be only 31 days");
    require(maxTimePeriod <= 10 days, "Extend time period can be only 10 days");
    require(maxTimePeriod > 0 days, "Minimum Extend time period can be only 0 days");

    IERC721 curruntNFTaddress = IERC721(smartContractAddressOfNFT); 
    require(curruntNFTaddress.getApprove(tokenIdNFT) == address(this), "Token ID of NFT has to be approve first");

    Loan storage loanrequest = allLoansDetails[totalLoan];
    loanrequest.loanID = totalLoan;
    loanrequest.lender = payable (address(0x0));
    loanrequest.borrower = payable(msg.sender);
    loanrequest.smartContractAddressOfNFT = smartContractAddressOfNFT;
    loanrequest.tokenIdNFT = tokenIdNFT;
    loanrequest.loanAmount = loanAmount;
    loanrequest.interestAmount = interestAmount;
    loanrequest.totalTimePeriod = totalTimePeriod;
    loanrequest.maxTimePeriod = maxTimePeriod;
    loanrequest.endLoneTimePeriod = endLoneTimePeriod;
    loanrequest.status = Status.PENDING;

    emit DetailsOfLoanData(msg.sender, totalLoan, loanrequest.loanAmount, loanrequest.interestAmount, loanrequest.maxTimePeriod, loanrequest.status);
    SafeMath.add(totalLoan, 1);

    curruntNFTaddress.safeTransferFrom(msg.sender, this(address), tokenIdNFT);
}

modifier validLoadID(uint loanID){
    require(loadID < totalLoan, "Loan ID is not valid");
    _;
}

address public shrishwalletAddress = 0xF7D3bdf086d66E548c945CA410BB80Fc00E49831;

event DetailsOfLoanAcceptData(address from, uint loadId, uint loanAmount, uint interestAmount, uint endLoneTimePeriod, Status status)

function acceptLoan(uint loadID) payable public valisLoanID(loanID) whenNotPaushed {
    require(allLoansDetails[loanID].Status != PENDING, "Status is not pending for loan");
    require(allLoansDetails[loanID].borrower != msg.sender, "You can not accept your own loan");
    require(msg.value >= allLoansDetails[loanID].loanAmount, "You are not sending enough Amount");
    allLoansDetails[loanID].lender = payable(msg.sender);
    allLoansDetails[loanID].status = Status.ACTIVE;
    allLoansDetails[loanID].endLoneTimePeriod = SafeMath.add(block.timestamp, allLoansDetails[loanID].totalTimePeriod);
    uint share = allLoansDetails[loanID].loanAmount.mul(25).div(1000);
    address payable shrishAC = payable(shrishwalletAddress);
    shrishAC.transfer(share);
    emit DetailsOfLoanAcceptData(allLoanRequests[loanID].lender, loanID, allLoansDetails[loanID].loanAmount, loanrequest.interestAmount, allLoansDetails[loanID].endLoneTimePeriod, allLoansDetails[loanID].status);
    allLoansDetails[loanID].borrower.transfer(allLoansDetails[loanID].loanAmount - share);
}

event DetailofLoneOnExtend(uint loadID, uint endLoneTimePeriod, Status status);

function LoanExtend(uint loadID) payable public whenNotPaushed {
    require(allLoansDetails[loanID].Status == ACTIVE, "Status is not Active for loan");
    require(allLoansDetails[loanID].borrower == msg.sender, "Only the borrower can Extend");
    require(allLoanRequests[loanID].maxTimePeriod > 0, "The maximum number of extensions to the loan has been reached.");
    allLoanRequests[loanID].endLoneTimePeriod = SafeMath.add(allLoanRequests[loanID].endLoneTimePeriod, allLoanRequests[loanID].totalTimePeriod);
    emit DetailofLoneOnExtend(loanID, allLoanRequests[loanID].endLoneTimePeriod, allLoanRequests[loanID].status);
}

event DetailofLoneOnEnd(uint loanID, Status status);

function endLone(loanID) payable public {
    require(allLoansDetails[loanID].Status == ACTIVE, "Status is not Active for loan");
    require(msg.sender == allLoansDetails[loanID].borrower, "only borrower can end this");
    require(msg.sender == allLoansDetails[loanID].lender && block.timestamp >= allLoanRequests[loanID].endLoneTimePeriod, "you can not end the lone before End Time");
    if(msg.sender == allLoansDetails[loanID].borrower){
        uint abountobereturn = allLoansDetails[loanID].loanAmount + allLoansDetails[loanID].interestAmount;
        require(msg.sender >= sum, "You are not sending the Total amount");
        allLoansDetails[loanID].status = Status.ENDED;
        allLoansDetails[loanID].lender.transfer(abountobereturn)
    }
    else {
        allLoansDetails[loanID].status = Status.DEFAULTED;
    }
    IERC721 curruntNFTaddress = IERC721(smartContractAddressOfNFT); 
    require(curruntNFTaddress.getApprove(tokenIdNFT) == address(this), "Token ID of NFT has to be approve first");
    emit DetailofLoneOnEnd(loanID, allLoansDetails[loanID].status);
    curruntNFTaddress.transferFrom(address(this), msg.sender, allLoansDetails[loanID].tokenIdNFT);
    
}

