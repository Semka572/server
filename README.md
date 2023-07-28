# server
 
# Dependencies
 
Start with installing express 

Before installing express, via terminal create a directory using command: "mkdir appname"  .  And make that working directory using command: "cd appname" .
Use command : "npm init"  ,  to create package.json file  , after that run "npm install express" , to install express.

After the first pull from this repository, use command: "npm install" to install all needed dependencies.

All other needed dependecies will be installed automaticly after installing express



# Starting servers

To start both front and back servers  use only 1 command, which is " npm run dev " .  Make sure the current working directory is  /server , NOT client directory.

Both servers start concurrently, and after it starts, a new tab will be opened in browser.

# Usage

After starting both servers, a new tab with address localhost:3000 will pop out in browser, to authenticate with google use path localhost:3000/auth/google, to transfer to google auth flow. To authenticate via Git, use /auth/github 

To check current user, use /api/current_user 
To log out of current user, use /api/logout


# Connection to DataBase

In this case used Atlas's cloud mongoDB, it is connected after creating Cluster in db, and it will ask to choose connection method, we use "Drivers" method. To install the driver use  "npm install mongodb" and after that, add the connection string ( which is unique for each user) into application code. In this code it is put in the /config/prod do not forget to add keys.js to .gitgnore . Every time a new account logs in, a new object with id will be added to collection.   

