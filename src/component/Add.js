import React, { Component } from 'react'
import axios from 'axios';

export default class Add extends Component {
  render() {
    return (
      <div>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>我想了解更多訊息!</p>
        <form name="user" onSubmit={this.test.bind(this)}>
                姓名:<input type="text" name="name"/><br/>
                地址:<input type="text" name="address"/><br/>
                電話:<input type="text" name="phone"/><br/>
                目的地:<select name="destination">
                        <option value="">請選擇</option>
                        <option value="Japan">日本旅遊</option>
                        <option value="Europe">歐洲旅遊</option>
                    </select>
                <br/>
                <br/>
                <input type="submit" value="送出"></input>
        </form>
      </div>
    )
  }

  test(e)
  {
        e.preventDefault();
        let data={
            name:document.user.name.value,
            address:document.user.address.value,
            phone:document.user.phone.value,
            destination:document.user.destination.value,
           

        }

        const x=axios.post("http://192.168.8.194:8080/practice/add",data,{
            headers:{
                'Content-Type':'application/json'
            }
        });

        x
        .then(function (response) {
            console.log(response.data);
            alert("送出成功");
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