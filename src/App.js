import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loginUser } from './redux/reducer';

class App extends Component {
  constructor(props) {
    super();
    this.state = { username: '', email: '' };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    const { username, email } = this.state;
    const user = { username, email };
    this.props.loginUser(user);
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
        <button onClick={this.handleClick}> Submit </button>
        <h3>The username is : {this.props.user.username}</h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { loginUser })(App);
