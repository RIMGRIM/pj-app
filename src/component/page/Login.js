import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  test(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    console.log('Username:', username);
    console.log('Password:', password);
  }

  render() {
    return (
      <div>
        <hr/>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>請輸入帳號密碼</p>
        <form name="user" onSubmit={this.test.bind(this)}>
          帳號：<input type="text" name="username"/><br/>
          密碼：<input type="password" name="password"/><br/>
          <input type="submit" value="送出"></input><br/>
            <br/>
            <br/>
          <Link to="#" className="btn btn-info">加入會員</Link>
        </form>
        <hr/>
      </div>
    )
  }
}
