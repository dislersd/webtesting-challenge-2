import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  render() {
    return (
      <>
        <h2>Hello</h2>
        <Dashboard strike={this.strike} ball={this.ball} hit={this.hit} foul={this.foul} />
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </>
    );
  }

  strike = () => {
    const { strikes } = this.state;
    if (strikes < 2) {
      this.setState({ strikes: strikes + 1 });
    } else {
      this.setState({ strikes: 0, balls: 0 });
    }
  };

  ball = () => {
    const { balls } = this.state;
    if (balls < 3) {
      this.setState({ balls: balls + 1 });
    } else {
      this.setState({ balls: 0, strikes: 0 });
    }
  };

  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  foul = () => {
    const { strikes } = this.state;
    if (strikes < 2) {
      this.setState({ strikes: strikes + 1 });
    }
  };
}

export default App;
