import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RandomLunchContainer } from './+lunch-page/RandomLunchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lunch Wheeling</h1>
        </header>
        <RandomLunchContainer />
      </div>
    );
  }
}

export default App;
