import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
  }
  
  render() {
    return (
     <> 
     <h2>Hello</h2>
     <Dashboard />
     <Display balls={this.state.balls} strikes={this.state.strikes}/>
     </>
    );
  }

  strike = () => {
    const {strikes, balls} = this.state;
    if (strikes < 2) {
      this.setState({ strikes: strikes + 1})
    } else {
      this.setState({ strikes: 0 })
    }
  }
}

export default App;
