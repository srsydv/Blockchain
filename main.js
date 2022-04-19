const Web3 = require("web3");

const chargedParticleaddress = "0x002E48F4bc55dd3156c56Dd5B2722257Ef7A486D";
const chargedParticleABI = require('./abis/ChargedParticles.json')
const protonBaddress = "0x517fEfB53b58Ec8764ca885731Db20Ca2dcac7b7";
const protonBABI = require('./abis/Proton.json');
const Dai = '0x30b1bECbfc9aE7Bb620eE6c6031820AF272924BB'
const ERC20ABI = require('./abis/ERC20.json')
const ERC721ABI = require('./abis/ERC721.json')
const ERC721NFTAddress = "0x5e42fb2e7a76e2b549817d368bc7629fc2639bb8"
let contractERC20;
let contractERC721;
let accounts;

init = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    console.log("Connected");
  } else {
    alert("Metamask not found");
  }
  const id = await web3.eth.net.getId();
  console.log("Chain Id =>",id)
//   deployedNetworkComp = chargedParticleABI.networks[id];
  CPcontracts = new web3.eth.Contract(
    chargedParticleABI,
    chargedParticleaddress
  );

  protonBcontracts = new web3.eth.Contract(
    protonBABI,
    protonBaddress
  );
  contractERC20 = new web3.eth.Contract(
    ERC20ABI,
    Dai
  );
  contractERC721 =  new web3.eth.Contract(
    ERC721ABI,
    ERC721NFTAddress
  )
  accounts = await web3.eth.getAccounts();
  console.log("Account Address =>",accounts[0]);
};

// createProtons = async() => {
//   const receipt = protonBcontracts.methods
//   .createProton(
//       accounts[0],
//       accounts[0],
//       "abc.com",
//       10
//   )
//   .send({ from: accounts[0],
//   gas:"600000" })
//   .once("receipt", (reciept) => {
//       console.log("reciept",reciept);
//   });
//   //39
// }
// const createProton1 = document.getElementById("createProton");
// createProton1.onclick = createProtons;

createBasicProton = async() => {
    const receipt = protonBcontracts.methods
    .createBasicProton(
        creator.value,
        accounts[0],
        uri.value
    )
    .send({ from: accounts[0] })
    .once("receipt", (reciept) => {
        console.log("reciept",reciept);
    });
    //39
}
const creator = document.getElementById("creator");
const receiver = document.getElementById("receiver");
const uri = document.getElementById("uri");
const btnmintNFT = document.getElementById("btnmintNFT");
btnmintNFT.onclick = createBasicProton;

approves = async() => {
    await contractERC20.methods
    .approve(chargedParticleaddress, Web3.utils.toWei(tokenamount1.value))
    .send({ from: accounts[0] })
    .once("receipt", (reciept) => {
      console.log(reciept);
  });
}
const tokenamount1 = document.getElementById("tokenamount1");
  const approve1 = document.getElementById("btnApprove");
  approve1.onclick = approves;

  approvesNFTToken = async() => {
    await contractERC721.methods
    .approve(chargedParticleaddress, tokenIdofnft.value)
    .send({ from: accounts[0] })
    .once("receipt", (reciept) => {
      console.log(reciept);
  });
}
const tokenIdofnft = document.getElementById("tokenIdofnft");
  const approvesNFTToken1 = document.getElementById("approvesNFTToken");
  approvesNFTToken1.onclick = approvesNFTToken;

  approves1 = async() => {
    await contractERC20.methods
    .approve(protonBaddress, Web3.utils.toWei(tokenamount2.value))
    .send({ from: accounts[0] })
    .once("receipt", (reciept) => {
      console.log(reciept);
  });
}
const tokenamount2 = document.getElementById("tokenamount2");
  const approve2 = document.getElementById("btnApprove1");
  approve2.onclick = approves1;

energizeParticles = async() =>  {

    await CPcontracts.methods.energizeParticle
    (
      "0x517fEfB53b58Ec8764ca885731Db20Ca2dcac7b7",
      tokenId.value,
     "generic",
     ERC20Token.value,
     tokenamount.value,
     "0x0000000000000000000000000000000000000000"
    ).send({
            from : accounts[0]
            // gas:"600000",
            // value: Web3.utils.toWei('1')
        }).once("receipt", (reciept) => {
            console.log(reciept);
        });
  };
  ERC20Token = document.getElementById("ERC20Token");
  const tokenId = document.getElementById("tokenId");
  const tokenamount = document.getElementById("tokenamount");
  const energizeParticle1 = document.getElementById("btnenergize");
  energizeParticle1.onclick = energizeParticles;



  dischargeParticles = async() =>  {

    await CPcontracts.methods.dischargeParticle
    (
      accounts[0],
      "0x517fEfB53b58Ec8764ca885731Db20Ca2dcac7b7",
      tokenId3.value,
     "generic",
     ERC20Token3.value
    ).send({
            from : accounts[0]
            // gas:"600000",
            // value: Web3.utils.toWei('1')
        }).once("receipt", (reciept) => {
            console.log(reciept);
        });
  };
  ERC20Token3 = document.getElementById("ERC20Token3");
  const tokenId3 = document.getElementById("tokenId3");
  const dischargeParticle1 = document.getElementById("btndischargeParticle");
  dischargeParticle1.onclick = dischargeParticles;



  releaseParticles = async() => {
    const receipt = CPcontracts.methods
    .releaseParticle(
        accounts[0],
        "0x517fEfB53b58Ec8764ca885731Db20Ca2dcac7b7",
        tokenId2.value,
        "generic",
        ERC20Token2.value,
    )
    .send({ from: accounts[0],
      // gas:"600000" 
    })
    .once("receipt", (reciept) => {
        console.log("reciept",reciept);
    });
    //39
}
ERC20Token2 = document.getElementById("ERC20Token2");
  const tokenId2 = document.getElementById("tokenId2");
const releaseParticle1 = document.getElementById("releaseParticle");
releaseParticle1.onclick = releaseParticles;


  createChargedParticles = async() =>  {
    console.log(
      NFTURI.value,ERC20Address.value,
      ERC20Amount.value,
      AnnuityPercent.value)
      await protonBcontracts.methods.createChargedParticle
    (
      accounts[0],
      accounts[0],
      '0x0000000000000000000000000000000000000000',
      NFTURI.value,
      'generic',
      ERC20Address.value,
      ERC20Amount.value,
      AnnuityPercent.value
    ).send({
            from : accounts[0],
        }).once("receipt", (reciept) => {
            console.log(reciept);
        });
};
// 41
const NFTURI = document.getElementById("nfturi");
const ERC20Address = document.getElementById("ERC20Address");
const ERC20Amount = document.getElementById("ERC20Amount");
const AnnuityPercent = document.getElementById("AnnuityPercent");
const createChargedParticles1 = document.getElementById("btncreateChargedParticle");
createChargedParticles1.onclick = createChargedParticles;

  setSalePrices = async() => {
    const receipt = protonBcontracts.methods
    .setSalePrice(
        46,
        Web3.utils.toWei('0.1')
    )
    .send({ from: accounts[0],
      // gas:"600000" 
    })
    .once("receipt", (reciept) => {
        console.log("reciept",reciept);
    });
    protonBcontracts.methods
    .setRoyaltiesPct(
        46,
        10
    )
    .send({ from: accounts[0],
      // gas:"600000" 
    })
    .once("receipt", (reciept) => {
        console.log("reciept",reciept);
    });
    protonBcontracts.methods
    .setCreatorRoyaltiesReceiver(
        46,
        "0x29d14148f9fd7F8EA48c1F81E494c9Bf859CB074"
    )
    .send({ from: accounts[0],
      // gas:"600000" 
    })
    .once("receipt", (reciept) => {
        console.log("reciept",reciept);
    });
    
    
}
const setSalePrice1 = document.getElementById("setSalePrice");
setSalePrice1.onclick = setSalePrices;

getSalePrices = async() => {
    // const receipt = protonBcontracts.methods
    // .createProtonForSale(
    //     "0xF7D3bdf086d66E548c945CA410BB80Fc00E49831",
    //     "0xF7D3bdf086d66E548c945CA410BB80Fc00E49831",
    //     "https://gateway.pinata.cloud/ipfs/QmYruhfGzUrYo2eW16RdSwfDSmUQpBZ2hNAxifiamDWYEx",
    //     100,
    //     100,
    //     1
    // )
    // .send({ from: accounts[0]
    //   // gas:"600000",
    //         // value: Web3.utils.toWei('1') 
    // })
    // .once("receipt", (reciept) => {
    //     console.log("reciept",reciept);
    // });
    const receipt = protonBcontracts.methods
    .getSalePrice(
        "46"
    )
    .call(
      function(err,res){
        if(res){
          console.log("getSalePrice",res)
        }
      }
    )
    protonBcontracts.methods
    .getLastSellPrice(
        "46"
    )
    .call(
      function(err,res){
        if(res){
          console.log("getLastSellPrice",res)
        }
      }
    )
    //39
}
const getSalePrice1 = document.getElementById("getSalePrice");
getSalePrice1.onclick = getSalePrices;

createProtonForSales = async() => {
  console.log("hi")
  const receipt = protonBcontracts.methods
  .createProtonForSale(
      accounts[0],
      accounts[0],
      "abc.com",
      10,
      10,
      Web3.utils.toWei('0.1'),  
  )
  .send({ from: accounts[0],
    gas:"600000" }
  )
  .once("receipt", (reciept) => {
      console.log(reciept);
  });
}
const createProtonForSales1 = document.getElementById("btncreateProtonForSale");
createProtonForSales1.onclick = createProtonForSales;



buyProtons = async() => {
  const receipt = protonBcontracts.methods
  .buyProton(
      46
  )
  .send({ from: accounts[0],
    value:Web3.utils.toWei('0.1')
  })
  .once("receipt", (reciept) => {
      console.log("reciept",reciept);
  });
}
const buyProton1 = document.getElementById("buyProton");
buyProton1.onclick = buyProtons;

covalentBonds = async() => {
  await CPcontracts.methods.covalentBond(
    "0x517fEfB53b58Ec8764ca885731Db20Ca2dcac7b7",
    tknID.value,
    'generic.B',
    nftTokenAddress.value,
    nftTokenId.value,

  )
  .send({ from: accounts[0]
  })
  .once("receipt", (reciept) => {
      console.log("reciept",reciept);
  });
}

const tknID = document.getElementById("tknID");
const nftTokenAddress = document.getElementById("nftTokenAddress");
const nftTokenId = document.getElementById("nftTokenId");

const covalentBonds1 = document.getElementById("covalentBond");
covalentBonds1.onclick = covalentBonds;

init();