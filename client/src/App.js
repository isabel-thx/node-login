import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    response: "",
    username: "",
    password: ""
  };

  login = async () => {
    const { username, password } = this.state;

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const body = await response.json();

    this.setState({ response: body.express });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Field">
          Username:
          <input
            className="Input"
            onChange={i => this.setState({ username: i.target.value })}
          />
        </div>
        <div className="Field">
          Password:
          <input
            className="Input"
            type="password"
            onChange={i => this.setState({ password: i.target.value })}
          />
        </div>
        <button className="Field" onClick={this.login}>
          Log In
        </button>
        <h2 className="App-intro">{this.state.response}</h2>
      </div>
    );
  }
}

export default App;
