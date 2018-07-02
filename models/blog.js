const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  blogTitle: String,
  blogDescription: String,
  tag: String
});

mongoose.model('blog', blogSchema);
