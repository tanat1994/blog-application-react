import React, { Component } from 'react';
import BlogList from './blog_lists';
import BlogForm from './blog_form';

class Blog extends Component {
  render () {
    return (
      <div className="">
        <section className="hero is-info">
          <div className="section">
            <h1 className="title">Blog Posts</h1>
            <h3 className="subtitle">Blog application woo hoo ~</h3>
          </div>
          <div className="section">
            <BlogForm />
          </div>
        </section>

        <div className="container">
          <section className="hero is-light">
            <BlogList />
          </section>
        </div>
      </div>
    );
  }
};

export default Blog;
