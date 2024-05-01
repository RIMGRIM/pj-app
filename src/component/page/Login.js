import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    axios.post('http://192.168.8.194:8080/account/login', { username, password })
      .then(response => {
        console.log('Login successful:', response.data);
        alert('Login successful');
      })
      .catch(error => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your username and password.');
      });
  }

  render() {
    return (
      <div>
        <hr />
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>請輸入帳號密碼</p>
        <form onSubmit={this.handleSubmit}>
          帳號：<input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
          密碼：<input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
          <br />
          <input type="submit" value="送出" /><br />
        </form>
        <hr />
      </div>
    );
  }
}
