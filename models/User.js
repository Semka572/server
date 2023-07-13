const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

const GithubSchema = new Schema({
  githubId: String
});

mongoose.model('users', userSchema);
