import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '' };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>APP Component</h1>
        <input
          name="username"
          type="text"
          onChange={(e) => this.changeHandler(e)}
          value={this.state.userName}
        />
        <span> - </span>
        <input
          name="email"
          type="text"
          onChange={(e) => this.changeHandler(e)}
          value={this.state.email}
        />
        <span> - </span>
        <button> Submit </button>
      </div>
    );
  }
}

export default App;
