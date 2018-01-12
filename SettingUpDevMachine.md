# Setting up Dev Machine - Ubuntu 16 From Azure

Working from [Decypher Media's Guide](https://www.youtube.com/watch?v=rmtsh7Q7sbE&t=393s)
And creating one of [these documents](https://gist.github.com/AlwaysBCoding/9ce09281e5e097ce8ab7add2602c2fc7) with our own instructions. 


# Connecting via SSH and allowing forwarding to rmate. 

*Follow instruction in RemoteEditingFilesInVSCode.md as a prereq.*

Connect to VM: 

`$ ssh -R 52698:localhost:52698 conductor@23.102.170.112` 

Install Build Essentials:

`$ sudo apt-get install build-essential`


Install NVM and Node: 

`$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash`

`$ source ~/.profile`

`$ nvm --version`

We're going to do Node Version 7: 

`$ nvm install 7.10.1`

`$ nvm -v`

Install testprc: 

`$ npm install -g ethereumjs-testrpc` 

Start Test Ethereum on Machine: 

`$ testrpc`

Now open new ssh connection to machine. 

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


