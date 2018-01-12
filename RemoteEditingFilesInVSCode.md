# Using rmate properly with Ubuntu and VS Code:

### On Azure; 

Create Azure Ubuntu VM

Here are some instructions for the Azure CLI: 

```
// Login: 
> az login

// Set Subscription if you have a couple: 
> az account set --subscription "d35cee73-12bb-4a1f-bdd4-63b296dd59c5"

// Create a resource group to put a vm in: 
> az group create --name myTempResourceGroup --location southcentralus

// Get a list of available image types: 
> az vm image list --output table 

// And a list of image sizes available in your location: 
> az vm list-skus --output table | grep southcentralus 

// the "grep" won't work in vanilla powershell, but will work with git shell. You can also just remove the "| grep southcentralus" and do a bit of scrolling. 

// Now create vm: 
> az vm create -n MyTempVM --resource-group myTempResourceGroup --image UbuntuLTS --admin-username conductor --admin-password 4321Password --size Standard_DS1

// Get IP address of new VM: 
az vm list-ip-addresses  -n MyTempVM 
```

No need to mess with ports. You're ready to start working. 

If you want to *delete* the VM and Resource group when you're done: 

```
// Find it: 
> az group list

// And DELETE IT!
> az group delete -n myTempResourceGroup

// Or you could just deallocate it: 
> az vm deallocate -g myTempResourceGroup -n MyTempVM

// Then Start it again later: 
> az vm start -g myTempResourceGroup -n MyTempVM
```

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

`Ctrl+Shift+p -> Remote: start server`

Now ssh into an Ubuntu VM: 

Need to use port forwarding. 

`$ ssh -R 52698:localhost:52698 root@123.123.123.123`

### On the server: 

Now that you've ssh'd into the VM in Azure. 

Install rmate for bash: [(from aurora on github)](https://github.com/aurora/rmate)

`$ sudo wget -O /usr/local/bin/rmate https://raw.github.com/aurora/rmate/master/rmate`
`$ sudo chmod a+x /usr/local/bin/rmate`

Now edit a file: 

`$ rmate text.txt` 

Save the file and check it out back on the ssh connection: 

`$ cat text.txt`

## Full Workflow: 

Turn on Ubuntu VM. 

Open VS Code + Start server: `F1 Remote: start server` 

ssh into VM: `$ ssh -R 52698:localhost:52698 conductor@23.102.170.112`

launch rmate and edit file: `rmate file.txt` 

Save and succeeeeeed! 



