const Lone = artifacts.require("LoneOfNFT");

// module.exports = async function (deployer) {
//   // deployer.deploy(Lone);
//   const LoneNFTAddress = await deployer.deploy(Lone);
//   await LoneNFTAddress.deployed();
//   console.log("Lone contract deployed to", LoneNFTAddress.address);
// };
module.exports = function (deployer) {
  deployer.deploy(Lone);
};