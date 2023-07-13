const mongoose = require('mongoose');
const { Schema } = mongoose;

const GithubSchema = new Schema({
  githubId: String
});

mongoose.model('usersgit', GithubSchema);

