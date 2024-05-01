import React, { Component } from 'react'
import Carousel from '../Carousel';
import { Link } from 'react-router-dom';

export default class C extends Component {
  render() {
    const images = [
      '/pic/A1.jpg',
      '/pic/A2.jpg',
      '/pic/A3.jpg',
    ];

    return (
      <div>
        <Carousel images={images} /> {/* 使用 Carousel 组件 */}
        <hr/>
        <p>奧地利是一個山地國家，全境四周被阿爾卑斯山所環繞，因此讓奧地利擁有壯麗的自然風景。除此之外，奧地利是一個以音樂和藝術聞名的國家，當地孕育出許多偉大的音樂家，像是莫扎特、貝多芬、舒伯特等等。</p>
        <br/>
        <Link to="/Login" className="btn btn-primary">我要參加!</Link>
        <hr/>
        
      </div>
    )
  }
}
