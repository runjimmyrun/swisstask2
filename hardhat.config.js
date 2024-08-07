require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "PASTE UR PRIVATE KEY WITHOUT 0X";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`1003c76d75306a469fcbcbc7f7e00f4cdb4b1797d29008c07d55458d9a581ec7`], //your private key
    },
  },
};