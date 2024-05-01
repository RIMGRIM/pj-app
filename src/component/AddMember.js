import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AddMember extends Component {
  render() {
    return (
      <div>
        <hr/>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>新增帳號密碼</p>
        <form name="user" onSubmit={this.test.bind(this)}>
                帳號：<input type="text" name="username"/><br/>
                密碼：<input type="password" name="password"/><br/>
                <br/>
                <input type="submit" value="送出"></input><br/>
                <br/>
                <br/>
        <Link to="/Login" className="btn btn-dark">回到登入頁面</Link>
        </form>
        <hr/>
      </div>
    )
  }

  test(e)
  {
        e.preventDefault();
        let data={
            username:document.user.username.value,
            password:document.user.password.value,
           

        }

        const x=axios.post("http://192.168.8.194:8080/account/add",data,{
            headers:{
                'Content-Type':'application/json'
            }
        });

        x
        .then(function (response) {
            console.log(response.data);
            alert("新增成功");
          })
          .catch(function (error) {
            // 檢查error對象的訊息
            if (error.response) {
              // 請求被伺服器接收，但狀態碼不在2xx範圍內
              console.log('Server responded with a non-2xx status:', error.response.status);
            } else if (error.request) {
              // 請求被發送，但沒有收到回應
              console.log('No response received from the server');
            } else {
              // 發送請求時發生錯誤
              console.log('Error sending the request:', error.message);
            }
          });
}
}