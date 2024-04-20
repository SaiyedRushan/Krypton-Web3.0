require("@nomicfoundation/hardhat-toolbox")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: "https://rpc.ankr.com/polygon_amoy",
      accounts: ["your_private_key"],
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: ["your_private_key"],
    },
  },
}
