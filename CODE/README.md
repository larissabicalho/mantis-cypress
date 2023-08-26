
# Testes End-to-End using Cypress with Smell

The purpose of this code is to perform end-to-end tests.

## Cypress Installation

To carry out the script, configure your environment as follows:


**Step 1:** Install Cypress. The most recommended way is via npm (required [node.js](https://nodejs.org/en/download/)). In the project directory, run:
    
```bash
npm install cypress --save-dev
```

    
**Step 2:** 

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop) and restart the machine
2. If you get the error "WSL 2 installation is incomplete", [download and install WSL2 Kernel](https://docs.microsoft.com/pt-br/windows/wsl/wsl2-kernel) and click Restart

![](https://i.imgur.com/4wHESjW.png)

3. Open the Docker Desktop app

![](https://i.imgur.com/cyAeSa2.png)

4. The tutorial should be shown, just skip it and you will have this screen

![](https://i.imgur.com/Myxqwmv.png)


5. In the directory there will be the file **docker-compose.yml** (It is necessary to replace the ip's of the containers with the ip of the Machine)

6. Run the command > `docker-compose.exe up -d`

The docker-compose file stay in repository

7. After processing, if all goes well, the images will be downloaded and new containers created:

![](https://i.imgur.com/TPbVjVQ.png)

8. To validate the creation and execution of the run the command `docker ps -a` and the containers will be available and running:

![](https://i.imgur.com/4pZ3IEQ.png)

9. The Docker Desktop application will display the active containers as shown in the image:

![](https://i.imgur.com/tZfGGiZ.png)


**Step 3:** 

Make your first access to Mantis at http://127.0.0.1:8989

After accessing, it will be necessary to configure the database according to the table and values below:

| Variable | Value |
|-----|------|
| Type of Database | MySQL Improved |
| Hostname (for Database Server) | mantis_db_1 |
| Username (for Database) | mantisbt |
| Password (for Database) | mantisbt |
| Database name (for Database) | bugtracker |
| Admin Username (to create Database if required) | root |
| Admin Password (to create Database if required) | root |

After filling in, click on **Login/Continue** and wait for processing.

The first access must be done using *administrator/root* credentials. Reset the password to *administrator* or another easy-to-remember value. 

If you need change language click username -> my account -> preferences -> language -> update prefs 

To access the Mantis database (MariaDB) follow the steps below:

1. Download and install [HeidiSQL software](https://www.heidisql.com/download.php)

2. When opening the Session Manager, fill in the values below:

![](https://i.imgur.com/AhKMxvu.png)

3. Open the connection and you can check all tables and records:

![](https://i.imgur.com/EnYk6Md.png)
