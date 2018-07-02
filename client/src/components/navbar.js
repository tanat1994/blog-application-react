import React, { Component } from 'react';

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <a className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112" height="28" />
          </a>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info is-rounded">
                    <span className="icon"><i className="fa fa-twitter"></i></span>
                    <span>Twitter</span>
                  </a>
                </p>

                <p className="control">
                  <a className="button is-info is-rounded"
                    target="_blank"
                    href="https://github.com/tanat1994">
                    <span className="icon"><i className="fa fa-github"></i></span>
                    <span>Github</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
