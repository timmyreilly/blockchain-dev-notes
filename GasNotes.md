

Gas is used to avoid DDOS attacks on the ethereum protocol. It is the responsiblity of whoever calls a transaction or method. 

To run sha3 for example is 30 gas
To run a transaction or send ether to an address that costs 2100 gas. 

But the amount of ether you pay for it is not... This is determined by the miners on the network.
Ether to gas is a dynamic amount. 

ethstats.net 
```javascript

// current gas price  

web3.toWei(20, "gwei"); 

// 21000 gas to execute transation

web3.toWeit(20, "gwei") * 21000 

// Get the cost in ether... 

web3.fromWei(web3.toWei(20, "gwei") * 21000, "ether")

// ~ $1200 = 1 Ether 

```