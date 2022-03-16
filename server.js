// contract address:    0x4BFf2d6A9499e0b579D0682Aaf37b126ad5ecAC0
// const loneABI = [
//     {
//       "inputs": [],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "loneID",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "enum LoneOfNFT.Status",
//           "name": "status",
//           "type": "uint8"
//         }
//       ],
//       "name": "DetailofLoneOnCancle",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "loneID",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "enum LoneOfNFT.Status",
//           "name": "status",
//           "type": "uint8"
//         }
//       ],
//       "name": "DetailofLoneOnEnd",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "loneID",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "endLoneTimePeriod",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "enum LoneOfNFT.Status",
//           "name": "status",
//           "type": "uint8"
//         }
//       ],
//       "name": "DetailofLoneOnExtend",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "loneID",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "loanAmount",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "interestAmount",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "endLoneTimePeriod",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "enum LoneOfNFT.Status",
//           "name": "status",
//           "type": "uint8"
//         }
//       ],
//       "name": "DetailsOfLoanAcceptData",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "loneID",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "loanAmount",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "interestAmount",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "totalTimePeriod",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "extendTimePeriod",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "enum LoneOfNFT.Status",
//           "name": "status",
//           "type": "uint8"
//         }
//       ],
//       "name": "DetailsOfLoanData",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "previousOwner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "OwnershipTransferred",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "address",
//           "name": "account",
//           "type": "address"
//         }
//       ],
//       "name": "Paused",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "address",
//           "name": "account",
//           "type": "address"
//         }
//       ],
//       "name": "Unpaused",
//       "type": "event"
//     },
//     {
//       "inputs": [],
//       "name": "manager",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "owner",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "paused",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "renounceOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "shrishwalletAddress",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "transferOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         },
//         {
//           "internalType": "bytes",
//           "name": "",
//           "type": "bytes"
//         }
//       ],
//       "name": "onERC721Received",
//       "outputs": [
//         {
//           "internalType": "bytes4",
//           "name": "",
//           "type": "bytes4"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "pauseLones",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "unpauseLones",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "smartContractAddressOfNFT",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenIdNFT",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "loanAmount",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "interestAmount",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "totalTimePeriod",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "maxTimePeriod",
//           "type": "uint256"
//         }
//       ],
//       "name": "createLoan",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "loneID",
//           "type": "uint256"
//         }
//       ],
//       "name": "acceptLoan",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "loneID",
//           "type": "uint256"
//         }
//       ],
//       "name": "LoanExtend",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "loneID",
//           "type": "uint256"
//         }
//       ],
//       "name": "endLone",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "loneID",
//           "type": "uint256"
//         }
//       ],
//       "name": "cancelLone",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ]

  const tokenABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]


  const loneContractAddress = '0xF51F22dae0621C7753497b60c455162992eaE745';

  const REQUEST_STATUS = ["Pending", "Active", "Cancelled", "Ended", "Defaulted"];

  import Web3 from 'web3';
  import abi from './build/contracts/LoneOfNFT.json'
  const loneABI= abi.abi

  init = async () => {
      if(window.ethereum){
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
          console.log("connected");
      }
      else{
        alert("Metamask not found");
      }
  };

  const smartContractAddressOfNFT = document.getElementById("nftContractAddress");
  const tokenId = document.getElementById("nftTokenId");

approveNFT = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    const instance = new web3.eth.Contract(tokenABI, smartContractAddressOfNFT.value);

    await instance.methods.approve(loneContractAddress, 
        tokenId.value).send({
            from : accounts[0]
        }).once("receipt", (reciept) => {
            console.log(reciept);
        });
};

const nftAddress = document.getElementById("nftContractAddress1");
const nftId = document.getElementById("nftTokenId1");
const loanAmount = document.getElementById("loanAmount");
const interestAmount = document.getElementById("interestAmount");
const totalTimePeriod = document.getElementById("timePeriod");
const maxTimePeriod = document.getElementById("maxTimePeriod");


createLoan = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const instance = new web3.eth.Contract(loneABI, loneContractAddress, {from: accounts[0]});
    
    await instance.methods.createLoan(nftAddress.value,
      nftId.value,
      loanAmount.value.toString(),
      interestAmount.value.toString(),
      totalTimePeriod.value * 86400,
      maxTimePeriod.value
    ).send({
          from: accounts[0],
        })
        .once("receipt", (receipt) => {
          console.log(receipt);
        })
        .catch((err) => {
          console.log(err);
        });
  };



const loanID = document.getElementById("loanId");
const ethLoanAmount = document.getElementById("loanAmount1");
const ethInterestAmount = document.getElementById("interestAmount1");

acceptLoan = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const instance = new web3.eth.Contract(loneABI, loneContractAddress, {from: accounts[0]});
    console.log(accounts)
    const ttlvalue = ethLoanAmount.value.toString();
    await instance.methods.acceptLoan(
        loanID.value
        ).send({
            value : ttlvalue,
            from : accounts[0]
        }).once("receipt", (receipt) => {
            console.log(receipt);
        })
}


const extendLoanId = document.getElementById("extendLoanId");

LoanExtend = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const instance = new web3.eth.Contract(loneABI, loneContractAddress, {from: accounts[0]});

    await instance.methods.LoanExtend(
        extendLoanId.value
    ).send({
        from : accounts[0]
    }).once("receipt", (receipt) => {
        console.log(receipt);
    })
}

const approves = document.getElementById("approveBtn");
approves.onclick = approveNFT;

const create = document.getElementById("createBtn");
create.onclick = createLoan;

const accept = document.getElementById("acceptBtn");
accept.onclick = acceptLoan;

const extend = document.getElementById("extendBtn")
extend.onclick = LoanExtend;

