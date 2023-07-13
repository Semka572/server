const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));


  
  app.get('/api/google/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });


  app.get('/api/google/current_user', (req, res) => {
    res.send(req.user);
  });
};




module.exports = app => {
  app.get(
    '/auth/github',
    passport.authenticate('github', {
      scope: ['user', 'repo']
    })
  );

  app.get('/auth/github/callback', passport.authenticate('github'));

  app.get('/api/github/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/github/current_user', (req, res) => {
    res.send(req.user);
  });
};