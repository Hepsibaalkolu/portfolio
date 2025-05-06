const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  image: String,
  githubLink: String,
  liveLink: String,
});

module.exports = mongoose.model('Project', projectSchema);
