import React, { Component } from 'react';
import axios from 'axios';

class BlogDelete extends Component {
  constructor (props) {
    super(props);
    this.state = {
      _id: this.props.blogId
    };
    this.onDeleteBlog = this.onDeleteBlog.bind(this);
  }

  onDeleteBlog () {
    axios.delete(`/api/delete-blog/${this.state._id}`, {
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <button className="delete"
        aria-label="delete"
        onClick={this.onDeleteBlog}
        ></button>
    );
  };
};

export default BlogDelete;
