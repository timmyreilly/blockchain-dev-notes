## Configure Azure 
These instructions are used to install a Quorum environment into your Azure subscription.  It is recommended that a separate subscription be created in your Azure tenant, and you will need rights to deploy assets into this subscription. 

1. Go to https://portal.azure.com and sign in with your credentials 
2. Select “+ New” in the upper left and then search for “Quorum Demo”, select it, and press Create 
3. Name your VM according to your standards, e.g. “quorumdemo” 
 - Disk type SSD 
 - Enter a user name and a Password 
 - Select the subscription 
 - Create a new resource group following your naming conventions, e.g. “quoumrg” 
 - Leave location at default 
 - Press OK 
 - Select a DS2_V2 Standard VM size 
 - Press Select 
 - Leave all other options as default 
 - Press OK 
 - Press Create at final configuration step.  The licensing information is only stating that there is a charge for using Azure to run the Quorum deployment; however, there’s no cost for the actual Quorum assets It will take ~2-5 minutes to deploy.  You can see this both on your Azure dashboard, and you can see its status by selecting the bell-shaped notification button on the top right of the web frame 
4. Start SSH Client (Putty, Bash, etc) and connect to Virtual Machine
 - From the Azure portal, select the Quorum virtual machine you just deployed and copy its public IP address 
 - `$ ssh username@21.12.21.12`
 or 
 - Start PuTTY on your local machine 
 - Paste in the IP address and leave the port at 22 and connection type as SSH 
 - In Saved Sessions, name your saved session, e.g. “QuorumDemo” 
 - Select Save 
 - You can now select your saved session name from the list and then select Load 
5. Connect to your Quorum VM 
 - From PuTTY, select your saved session name and then select Load 
 - Select Open to start a SSH session to your VM 
 - For first time access, select Yes to cache the host key into the registry 
 - Make sure your Ubuntu distro is updated 
 - `sudo apt-get update -y && sudo apt-get upgrade -y` 
 - Install nodejs, NPM, and truffle 
 - `sudo apt-get install nodejs-legacy`
 - `sudo apt install npm`
 - `sudo npm install -g ethereumjs-testrpc truffle` 
 - Restart your Quorum VM 
 - From the Azure portal with your VM properties selected, press Restart on top ribbon 
 - Alternatively, from the bash shell, enter: `sudo shutdown -r now` 