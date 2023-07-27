# server
 
# Dependencies

To use this app you will need these dependencies installed :

    "concurrently": "^8.2.0",
    "cookie-session": "^2.0.0",
    "express": "^4.18.2",
    "mongodb": "^5.7.0",
    "mongoose": "^7.3.2",
    "nodemon": "^3.0.0",
    "passport": "^0.5.3",
    "passport-github2": "^0.1.12",
    "passport-google-oauth20": "^2.0.0",
    "picomatch": "^2.3.1"


To install a module use npm install ~module~

Be careful on passport version, it must be 0.5.3 , or an error will occure.

# Starting servers

To start both front and back servers you will use only 1 command, which is npm run dev.  Make sure you are in /server directory, NOT in client.
They both start concurrently and after it starts a tab will be opened in your browser.

# Usage

After you start both servers, you will have a tab with address localhost:3000 , to authenticate with google use path localhost:3000/auth/google, you will be transfered to google auth flow. To authenticate via Git, use /auth/github 

To check current user, use /api/current_user 
To log out of current user, use /api/logout
