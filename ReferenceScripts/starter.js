// Run this in the REPL. 
// $ node
// > .load starter.js 

const Web3 = require('web3');
const fs = require('fs');
contractAddress = '0xa7a3d38b335049ddad7b8d83efff35e16e7496d2';
var settlementABI = JSON.parse(fs.readFileSync('Settlement.quorum.abi', 'utf-8'));
settlementABI;
const web3 = new Web3(new Web3.providers.HttpProvider('http://40.87.66.68:22000'));
Settlement = web3.eth.contract(settlementABI);
settlementInstance = Settlement.at(contractAddress);
settlementInstance.getClientBalance.call();
settlementInstance.addClientFunds('1', { from: web3.eth.accounts[0] })