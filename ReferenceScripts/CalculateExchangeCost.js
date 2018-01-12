const Web3 = require('web3');

var web3 = new Web3; 

// 21000 Gas to Execute a transaction: 21000
// 21000 gwei in wei: 
web3.toWei(20, "gwei") * 21000 

// So in Ether: 
// console.log(web3.fromWei(web3.toWei(20, "gwei") * 21000, "ether")); 

console.log(`0:${process.argv[0]}\n1:${process.argv[1]}\n2:Gas Price (gwei) - ${process.argv[2]}\n3:Ether to USD (USD) - ${process.argv[3]}\n`) 

if (process.argv.length < 4){
    console.log("Please pass in the current gas price (eg. 50) AND how many dollars to ethereum cost (eg. 1212)"); 
    console.log("$ node currency_exchange 50 1200")
    process.exit(); 
} 

var etherRequired = web3.fromWei(web3.toWei(process.argv[2], "gwei") * 21000, "ether"); 

console.log("Amount of ether required: ", etherRequired); 

var costInUsd = etherRequired * process.argv[3]

console.log(`Cost of transaction in USD: $${costInUsd}`); 



