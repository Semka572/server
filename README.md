# server
 
# Dependencies

To use this app you will need these dependencies installed :

To install a module, open terminal and : use npm install ~module~  (as an example:   npm install express   )
 
Start with installing express 

After the first pull, use command: "npm install" to install all needed dependencies.

All other needed dependecies will be installed automaticly after installing express


Be careful on passport version, it must be 0.5.3 , or an error will occure.

# Starting servers

To start both front and back servers you will use only 1 command, which is npm run dev.  Make sure you are in /server directory, NOT in client.
They both start concurrently and after it starts a tab will be opened in your browser.

# Usage

After you start both servers, you will have a tab with address localhost:3000 , to authenticate with google use path localhost:3000/auth/google, you will be transfered to google auth flow. To authenticate via Git, use /auth/github 

To check current user, use /api/current_user 
To log out of current user, use /api/logout


# Connection to DataBase

In this case I used Atlas's cloud mongoDB, it is connected after creating Cluster in db, and it will ask to choose connection method, we use "Drivers" method. To install the driver use  "npm install mongodb" and after that, add the connection string which you will see induvidually into application code. In my case it is put in the /config/prod do not forget to add your keys to .gitgnore . Every time a new account logs in, a new object with id will be added to collection.   

