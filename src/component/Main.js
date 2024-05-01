import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class Main extends Component {

  render() {
    return (
      // 四卡片
      <div className="row">
        <div className="col-12 mb-3">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/pic/J-3.jpg'} className="card-img-top" />            
            <div className="card-body">
              <h5 className="card-title">寒假暢遊北海道</h5>
              <p className="card-text">暢遊北海道函館、小樽、旭川、札幌、摩周湖七日遊！</p>
              <Link to="/A" className="btn btn-warning">查看詳情</Link>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/pic/E-4.jpg'} className="card-img-top" />            
            <div className="card-body">
              <h5 className="card-title">西葡雙牙深呼吸</h5>
              <p className="card-text">聖家堂、馬德里王宮、太陽門廣場、羅馬水道橋、熱羅尼莫斯修道院遊十日！</p>
              <Link to="/B" className="btn btn-warning">查看詳情</Link>
            </div>
          </div>
        </div>        
        <div className="col-12 mb-3">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/pic/E-5.jpg'} className="card-img-top" />            
            <div className="card-body">
              <h5 className="card-title">奧地利人文旅行</h5>
              <p className="card-text">哈斯塔特小鎮、薩爾茨堡、美景宮、霍夫堡皇宮、百水公寓、納許市場五日！</p>            
              <Link to="/C" className="btn btn-warning">查看詳情</Link>
            </div>
          </div>        
        </div>
        <div className="col-12 mb-3">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/pic/E-6.jpg'} className="card-img-top" />            
            <div className="card-body">
              <h5 className="card-title">夏遊布拉格</h5>
              <p className="card-text">布拉格天文鐘、查理大橋、庫倫洛夫、人骨教堂、伏爾塔瓦河遊船五日！</p>
              <Link to="/D" className="btn btn-warning">查看詳情</Link>              
            </div>
          </div>        
        </div>
      </div>
      
    )
  }
}
