import React, { Component } from 'react';

console.log('這是頁尾組件');

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="container-fluid">	
          <p className="float-end"><a href="#">回到頂部</a></p>
          <p>&copy; 2023 國際旅遊公司 &middot; <a href="#">聯絡我們</a></p>
        </footer>
      </div>
    );
  }
}