import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/navbar';
import Body from './components/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default App;
