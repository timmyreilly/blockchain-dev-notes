# Setting up Dev Machine - Ubuntu 16 From Azure

Working from [Decypher Media's Guide](https://www.youtube.com/watch?v=rmtsh7Q7sbE&t=393s)
And creating one of [these documents](https://gist.github.com/AlwaysBCoding/9ce09281e5e097ce8ab7add2602c2fc7) with our own instructions. 

# Remote File Editing with Visual Studio Code 

https://codepen.io/ginfuru/post/remote-editing-files-with-ssh 




# Connecting via SSH and allowing forwarding to rmate. 

Still not sure what to do with this config: 

```
Host myRemoteServerName
    HostName 12.34.567.89
    User root
    ForwardAgent yes
    RemoteForward 52698 127.0.0.1:52698
``` 

But I can do something like this: 

`$ ssh -R 52698:localhost:52698 conductor@23.102.170.112` 

`$ ssh -R 52698:localhost:52698 23.102.170.112` 

Now let's install NVM and Node: 

`$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash`

`$ source ~/.profile`

`$ nvm --version`

We're going to do Node Version 7: 

`$ nvm install 7.10.1`

`$ nvm -v`

Let's get jmate: 

`$ npm -g install jmate` 



How about RSUB: 
`sudo wget -O /usr/local/bin/rsub https://raw.github.com/aurora/rmate/master/rmate`
`sudo chmod +x /usr/local/bin/rsub`


Kill Process on Port:
``` 
# to list all ports that are used
sudo netstat -ntlp | grep LISTEN

# you can obtain a specific port using the following command
sudo netstat -ntlp | grep :8080

# when you execute the command above you will see some thing like that
tcp        0      0 0.0.0.0:27370           0.0.0.0:*               LISTEN      4394/skype      
tcp        0      0 127.0.1.1:53            0.0.0.0:*               LISTEN      2216/dnsmasq    
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN      4912/cupsd      
tcp6       0      0 :::8080                 :::*                    LISTEN      8868/java       
tcp6       0      0 ::1:631                 :::*                    LISTEN      4912/cupsd

# to kill the process using the port 8080 see the process number "8868/java" then:
sudo kill -TERM 8868
```