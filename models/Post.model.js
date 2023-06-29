const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a valid title"]
  },
  description: {
    type: String,
    required: [true, "Please provide a valid description"]
  },  
  // owner will be added later on
});

module.exports = model('Post', postSchema);
