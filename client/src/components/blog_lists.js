import React, { Component } from 'react';
import axios from 'axios';
import BlogDeleteButton from './blog_delete.js';

class BlogList extends Component {

  constructor () {
    super();
    this.state = {
      blog: []
    };
  }

  fetchBlog () {
    axios.get('/api/fetch-blog')
      .then((res) => {
        this.setState({ blog: res.data });
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount () {
    axios.get('/api/fetch-blog')
      .then((res) => {
        this.setState({ blog: res.data });
        console.log(this.state.blog.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch('/api/fetch-blog')
    //   .then(res => res.json())
    //   .then(blog => this.setState({ blog }, () => console.log('Blog fetched ...', blog)));
  }

  render () {
    return (
      <div className="hero-body">
        <div className="section has-background-white">
          <div className="section-body">

            {this.state.blog.map((blog) => (
              <article className="message is-info" key={blog._id}>
                <div className="message-header">
                  <p>{blog.blogTitle} <a><i className="fa fa-tag">{blog.tag}</i></a></p>
                  <BlogDeleteButton blogId={blog._id} />
                </div>
                <div className="message-body">
                  <p>{blog.blogDescription}</p>
                </div>
              </article>
            ))}

          </div>
        </div>
      </div>
    );
  };
};

export default BlogList;
