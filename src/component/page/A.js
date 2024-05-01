import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import CarouselA from '../carousel/CarouselA';
import { Link } from 'react-router-dom';

export default class A extends Component {
  render() {
    return (
      <div>
        <CarouselA/>
        <hr/>
        <p>北海道位於日本最北端，在日本國內也是超人氣的旅遊勝地。春夏盛開的繽紛花朵、秋季美麗的紅葉，冬天將大地覆蓋的白雪，四季各有不同美景，此外北海道也是日本國內數一數二擁有豐富食材的的地方，往年都有許多來自國內外的觀光客前往觀光。</p>
        <br/>
        <Link to="/Login" className="btn btn-primary">我要參加!</Link>
        <hr/>
        
      </div>
    )
  }
}
