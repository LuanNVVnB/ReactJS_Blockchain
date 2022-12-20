require('dotenv').config();

const privateKeys = process.env.PRIVATE_KEYS || ""

const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
  
  contracts_build_directory: "./public/contracts",

  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*" // Match any network id
    // },
    goerli: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 5
    }
  },
  // networks: {
  
  //   // Useful for testing. The `development` name is special - truffle uses it by default
  //   // if it's defined here and no other network is specified at the command line.
  //   // You should run a client (like ganache-cli, geth or parity) in a separate terminal
  //   // tab if you use this network and you must also set the `host`, `port` and `network_id`
  //   // options below to some value.
  //   //
  //   // development: {
  //   //  host: "127.0.0.1",     // Localhost (default: none)
  //   //  port: 7545,            // Standard Ethereum port (default: none)
  //   //  network_id: "*",       // Any network (default: none)
  //   // },
  //   rinkeby: {
  //     provider: () => new HDWalletProvider(`6bdd01bbc400d5f7131155da2ab1c4ee4d1dfcd052dc2d06c69e0b358fe8c98e`, `wss://rinkeby.infura.io/ws/v3/71f1a2a33c8a426283ac0290273aa7a8`),
  //     network_id: 4,       // Ropsten's id
  //     gas: 5500000,        // Ropsten has a lower block limit than mainnet
  //     confirmations: 2,    // # of confs to wait between deployments. (default: 0)
  //     timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
  //     skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
  //   },
  //   // Another network with more advanced options...
  //   // advanced: {
  //   // port: 8777,             // Custom port
  //   // network_id: 1342,       // Custom network
  //   // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
  //   // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
  //   // from: <address>,        // Account to send txs from (default: accounts[0])
  //   // websocket: true        // Enable EventEmitter interface for web3 (default: false)
  //   // },
  //   // Useful for deploying to a public network.
  //   // NB: It's important to wrap the provider as a function.
  //   // ropsten: {
  //   // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
  //   // network_id: 3,       // Ropsten's id
  //   // gas: 5500000,        // Ropsten has a lower block limit than mainnet
  //   // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
  //   // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
  //   // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
  //   // },
  //   // Useful for private networks
  //   // private: {
  //   // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
  //   // network_id: 2111,   // This network is yours, in the cloud.
  //   // production: true    // Treats this network as if it was a public net. (default: false)
  //   // }
  // },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",
      optimizer: {
        enabled: true,
        runs: 200
      }      
    }
  },

}
