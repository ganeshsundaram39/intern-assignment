import React, { Component } from 'react';
import './App.css';
import SignIn from './components/Sign-In/Sign-In';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SignIn />
      </div>
    );
  }
}

export default App;
