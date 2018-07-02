import React, { Component } from 'react';
import Blog from './blog';

class Body extends Component {
  render () {
    return (
      <div className="columns">
        <div className="column">
          <div className="">
            <Blog />
          </div>
        </div>
      </div>
    );
  };
};

export default Body;
