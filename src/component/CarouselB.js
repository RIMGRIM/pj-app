import React, { Component } from 'react';

export default class CarouselB extends Component {
  render() {
    return (
      // 輪播
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={process.env.PUBLIC_URL + '/pic/S1.jpg'} className="d-block w-100"/>
            <div className="carousel-caption">
            </div>
          </div>

          <div class="carousel-item">
            <img src={process.env.PUBLIC_URL + '/pic/S2.jpg'} className="d-block w-100"/>
            <div className="carousel-caption">
            </div>
          </div>
            <div class="carousel-item">
              <img src={process.env.PUBLIC_URL + '/pic/P1.jpg'} className="d-block w-100"/>
              <div className="carousel-caption">
              </div>
            </div>
          </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}