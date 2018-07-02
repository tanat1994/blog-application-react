const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('./models/blog');
const { ObjectID } = require('mongodb');
const config = require('./config/config');

mongoose.connect(config.mongoURI);
const Blogs = mongoose.model('blog');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// @dev test API
app.get('/api/test', (req, res) => {
  res.json('hello test');
});

// @dev Fetch all blogs
app.get('/api/fetch-blog', (req, res) => {
  Blogs.find().then((blog) => {
    res.json(blog);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

// @dev Create new blog
app.post('/api/create-blog', (req, res) => {
  const blog = new Blogs({
    blogTitle: req.body.blogTitle,
    blogDescription: req.body.blogDescription,
    tag: req.body.tag
  });

  blog.save().then((blog) => {
    res.send(blog);
  }, (err) => {
    res.status(400).send(err);
  });
});

// @dev Update a blog
app.patch('/api/patch-blog/:blogId', (req, res) => {
  const blogId = req.params.blogId;
  const { blogTitle, blogDescription } = req.body;

  if(!ObjectID.isValid(blogId)) {
    return res.status(404).send();
  }

  Blogs.findByIdAndUpdate(blogId, {
    $set: req.body
  }).then((blog) => {
    if(!blog) {
      return res.status(404).send();
    }
    res.send({ blog });
  }).catch((e) => {
    res.status(400).send();
  });
});

// @dev Delete a blog
app.delete('/api/delete-blog/:blogId', (req, res) => {
  const blogId = req.params.blogId;
  if(!ObjectID.isValid(blogId)) {
    return res.status(404).send();
  }

  Blogs.findByIdAndRemove(blogId).then((blog) => {
    if(!blog) {
      return res.status(404).send();
    }
    res.status(200).send(blog);
  }, (err) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`API on port ${port}`);
});
