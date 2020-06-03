## MySQL Install

```
sudo yum install mysql-server
sudo systemctl start mysqld
```
```
CREATE DATABASE meeting;
Query OK, 1 row affected (0.00 sec)

mysql> USE meeting
Database changed
mysql> CREATE TABLE heads (id INT, room VARCHAR(20), count INT, ts TIMESTAMP NULL

```

firewall check
```service iptables stop```
## Project setup
```
npm install
```

### Run
```
node server.js
```
