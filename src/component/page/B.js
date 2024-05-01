import React, { Component } from 'react'
import Carousel from '../Carousel';
import { Link } from 'react-router-dom';

export default class B extends Component {
  render() {
    const images = [
      '/pic/S1.jpg',
      '/pic/S2.jpg',
      '/pic/P1.jpg',
    ];

    return (
      <div>
        <Carousel images={images} /> {/* 使用 Carousel 组件 */}
        <hr/>
        <p>西班牙在歐洲和世界上是非常著名的旅遊勝地，有著很舒適的地中海氣候並且陽光充足，是很多旅行者的度假天堂。葡萄牙地處歐洲最西部，瀕臨大西洋，南面與非洲接壤。海上霸主的歷史給它留下了豐富的文化遺產，包括不同風格的古建築以及宗教朝聖路線等。</p>
        <br/>
        <Link to="/Login" className="btn btn-primary">我要參加!</Link>
        <hr/>
      </div>
    )
  }
}
