import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import CarouselD from './CarouselD';

export default class D extends Component {
  render() {
    return (
      <div>
        <CarouselD/>
        <hr/>
        <p>位於東歐的捷克，擁有童話般的美麗風光、優雅的古蹟建築、神秘的古典氣質，豐富的世界文化遺產，處處眼見極具特色的巴洛克風格和哥德式建築，是許多人夢想一生必遊的旅行地!</p>
        <hr/>
      </div>
    )
  }
}
