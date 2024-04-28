import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
        //<!-- 內容區 -->
        <div className="container-fluid mt-3">
          <div className="alert alert-info" role="alert">
            <a href="ex2.html" className="alert-link"><strong>關西小小兵！</strong></a>環球影城、哈利波特、星光派對五日！
          </div>
          <div className="alert alert-primary" role="alert">
            <a href="ex2.html" className="alert-link"><strong>沖繩五星！</strong></a>海洋博公園、玉泉王國村、五星住宿四日！
          </div>
          <div className="alert alert-success" role="alert">
            <a href="ex2.html" className="alert-link"><strong>消暑一起GO！</strong></a>峇里島五日遊四人同行一人免費！
          </div>
        </div>
    )
  }
}
