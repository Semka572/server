const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const UsersGit = mongoose.model('usersgit');

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
      callbackURL: '/auth/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      UsersGit.findOne({ githubId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new UsersGit({ githubId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
