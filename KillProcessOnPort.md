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