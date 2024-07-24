const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
