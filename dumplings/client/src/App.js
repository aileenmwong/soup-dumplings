import React, { Component } from 'react';
import MyMap from './components/MyMap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello</h1>
        </header>
        <div>
        <MyMap />
        </div>
      </div>
    );
  }
}

export default App;
