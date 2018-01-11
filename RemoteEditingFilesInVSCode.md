# Using rmate properly with Ubuntu and VS Code:

### On Azure; 

Create Azure Ubuntu VM

No need to mess with ports. 

### On your computer: 

Install this extension: 
[https://github.com/rafaelmaiolla/remote-vscode](https://github.com/rafaelmaiolla/remote-vscode)

Put these settings in your user settings: 

```JSON
// Port number to use for connection.
    "remote.port": 52698,
    // Launch the server on start up.
    "remote.onstartup": false,
    // Address to listen on.
    "remote.host": "127.0.0.1",
    // If set to true, error for remote.port already in use won't be shown anymore.
    "remote.dontShowPortAlreadyInUseError": false
```

Leave the remote host as 127.0.0.1, this confused me at first but this is where you're going to host the rmate server on your machine. 

Now ssh into an Ubuntu VM: 

Need to use port forwarding. 

`$ ssh -R 52698:localhost:52698 root@123.123.123.123`

`ssh -R 52698:localhost:52698 conductor@23.102.170.112`

### On the server: 

Install rmate for bash: [(from aurora on github)](https://github.com/aurora/rmate)

`$ sudo wget -O /usr/local/bin/rmate https://raw.github.com/aurora/rmate/master/rmate`
`$ sudo chmod a+x /usr/local/bin/rmate`

Now edit a file: 

`rmate text.txt` 


 

