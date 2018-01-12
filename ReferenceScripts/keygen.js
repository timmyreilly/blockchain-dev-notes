// keygen.js

// Generate Ethereum Address from Private Key - 64 

console.log(`0:${process.argv[0]}\n1:${process.argv[1]}\n2:${process.argv[3]}`) 

var EthUtil = require('ethereumjs-util');



var hexToBytes = function(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16)); 
    return bytes; 
}

var privateKeyToAddress = function(privateKey){
    return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`; 
}

console.log(privateKeyToAddress(process.argv[2])); 