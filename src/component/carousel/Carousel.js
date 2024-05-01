import React, { Component } from 'react';

export default class Carousel extends Component {
  render() {
    return (
      // 輪播
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={process.env.PUBLIC_URL + '/pic/J-2.jpg'} className="d-block w-100" alt="函館"/>
            <div className="carousel-caption">
              <h5>超值行程－日本北海道函館</h5>
            </div>
          </div>

          <div class="carousel-item">
            <img src={process.env.PUBLIC_URL + '/pic/J-1.jpg'} className="d-block w-100" alt="銀山溫泉"/>
            <div className="carousel-caption">
              <h5>超值行程－日本山形銀山溫泉</h5>
            </div>
          </div>
            <div class="carousel-item">
              <img src={process.env.PUBLIC_URL + '/pic/E-1.jpg'} className="d-block w-100" alt="少女峰"/>
              <div className="carousel-caption">
                <h5>超值行程－瑞士少女峰</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src={process.env.PUBLIC_URL + '/pic/E-2.jpg'} className="d-block w-100" alt="新天鵝堡"/>
              <div className="carousel-caption">
                <h5>超值行程－德國新天鵝堡</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src={process.env.PUBLIC_URL + '/pic/E-3.jpg'} className="d-block w-100" alt="美泉宮"/>
              <div className="carousel-caption">
                <h5>超值行程－奧地利美泉宮</h5>
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