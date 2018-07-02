import React, { Component } from 'react';
import axios from 'axios';

class BlogForm extends Component {

  constructor () {
    super();
    this.state = {
      blogTitle: '',
      blogDescription: '',
      tag: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();
    const { blogTitle, blogDescription, tag } = this.state;
    console.log(`title: ${blogTitle} / desc: ${blogDescription}/ tag: ${tag}`);

    axios.post('/api/create-blog', {
      blogTitle: blogTitle,
      blogDescription: blogDescription,
      tag: tag
    }).then((res) => {
      console.log('Create completed');
      // res.redirect('/');
      return axios.get('/');
    }).then((err) => {
      console.log(err);
    });
  }

  render () {
    // const buttonStyle = {
    //   width: '150px'
    // };

    return (
      <div className="container">
        <div className="field">
          <section className="hero is-light">

            <div className="hero-body">
              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input className="input is-large" type="text"
                    placeholder="Blog Title"
                    onChange={ event => this.setState({ blogTitle: event.target.value })}/>
                  <span className="icon is-large is-left">
                    <i className="fa fa-archive fa-lg"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-left">
                  <textarea className="textarea"
                    placeholder="e.g. Lorem Ipsum"
                    onChange={ event => this.setState({ blogDescription: event.target.value })}></textarea>
                </div>
              </div>


              <div className="field is-grouped is-pulled-right">
                <div className="control has-icons-left">
                  <div className="select is-medium">
                    <select onChange={ event => this.setState({ tag: event.target.value }) }>
                      <option value="Technology">Technology</option>
                      <option value="Fashion">Fashion</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                  <span className="icon is-left">
                    <i className="fa fa-tag"></i>
                  </span>
                </div>
                <div className="control">
                  <a className="button is-success is-medium"
                    onClick={ this.onSubmit }><strong>Post</strong></a>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    );
  };
};
export default BlogForm;
