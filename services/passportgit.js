const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const UsersGit = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UsersGit.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback' ,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
     const existingUser = await UsersGit.findOne({ githubId: profile.id })

        if (existingUser) {
        return done(null, existingUser);
        } 

        const user = await new UsersGit({ githubId: profile.id }).save();
        done(null, user);
        }

    
  )
);
