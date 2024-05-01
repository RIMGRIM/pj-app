import React, { Component } from 'react'
import Carousel from '../Carousel';
import { Link } from 'react-router-dom';

export default class D extends Component {
  render() {
    const images = [
      '/pic/C1.jpg',
      '/pic/C2.jpg',
      '/pic/C3.jpg',
    ];

    return (
      <div>
        <Carousel images={images} /> {/* 使用 Carousel 组件 */}
        <hr/>
        <p>位於東歐的捷克，擁有童話般的美麗風光、優雅的古蹟建築、神秘的古典氣質，豐富的世界文化遺產，處處眼見極具特色的巴洛克風格和哥德式建築，是許多人夢想一生必遊的旅行地!</p>
        <br/>
        <Link to="/Login" className="btn btn-primary">我要參加!</Link>
        <hr/>
        
      </div>
    )
  }
}
