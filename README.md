# Server

# Dependencies

Start by installing express.

Before installing express, create a directory via the terminal using the command: "mkdir appname". Then, set that directory as the working directory with the command: "cd appname".
Use the command: "npm init" to create the package.json file, and after that, run "npm install express" to install express.

After the first pull from this repository, use the command: "npm install" to install all necessary dependencies.

All other required dependencies will be installed automatically after installing express.


# Starting Servers

To start both front and back servers, use only one command, which is "npm run dev". Make sure the current working directory is /server, NOT the client directory.

Both servers start concurrently, and after they start, a new tab will be opened in the browser.


# Usage

After starting both servers, a new tab with the address localhost:3000 will open in the browser. To authenticate with Google, use the path localhost:3000/auth/google to proceed to the Google authentication flow. To authenticate via Git, use /auth/github.

To check the current user, use /api/current_user. To log out the current user, use /api/logout.


# Connection to Database

In this case, Atlas's cloud MongoDB is used. It is connected after creating a Cluster in the database, and it will prompt to choose the connection method. We use the "Drivers" method. To install the driver, use "npm install mongodb," and after that, add the connection string (which is unique for each user) into the application code. In this code, it is placed in /config/prod. Don't forget to add keys.js to .gitignore. Every time a new account logs in, a new object with an id will be added to the collection.

