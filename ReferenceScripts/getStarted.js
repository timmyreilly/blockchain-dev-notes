// Run this in the REPL. 
// $ node
// > .load starter.js 


var Web3 = require("web3")
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var acct1 = web3.eth.accounts[0]

var acct2 = web3.eth.accounts[1]; 

var balance = (acct) => {return web3.fromWei(web3.eth.getBalance(acct),'ether').toNumber() }

web3.eth.sendTransaction({from: acct1, to: acct2, value: web3.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 50000000})

// The Nonce, the ID of the transaction. Needs to have the current nonce. 
web3.eth.getTransactionCount(acct1); 

// Everytransaction needs to have a sequencial nonce. 

// Customize Transactions...

var pKey1 = '2d1617b6282078368f08ecbe29ff18473f8411db2cd2f206bc5e798b25b31899'

var EthTx = require("ethereumjs-tx"); 

var pKey1x = new Buffer(pKey1, 'hex'); 

pKey1x; 