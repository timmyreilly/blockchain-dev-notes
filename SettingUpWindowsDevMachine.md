# Setting up Dev Machine - Windows 10 

Install NVM: 


We're going to do Node Version 7: 

`> nvm install 7.10.1`

`> nvm -v`

Install testprc: 

`> npm install -g ethereumjs-testrpc` 

Install node-gyp:

`>npm install -g node-gyp`

Start Test Ethereum on Machine: 

`$ testrpc`

Let's test our testrpc and get our first accounts back: 

```
$ mkdir test
$ cd test 
$ rmate package.json
```

package.json contents: 
```json
{
    "dependencies": {
        "web3": "0.17.0-alpha"
    }
}
```

Now install Web3 

`npm install`

And open Node REPL: 

```
$ node 
> var Web3 - require('web3'); 
> Web3
> var w3 = new Web3(new Web3.providers.HttpProvider("http://localhost8545"))
> w3.eth.accounts
```

This last line should list all accounts. Just like running test rpc in previous window. 


