import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">國際旅遊</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar1">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar1">
              <ul className="navbar-nav me-auto">
                <li className="nav-item active"><Link to="/Login" className="nav-link" >機票</Link></li>
                <li className="nav-item"><Link to="/Login" className="nav-link">訂房</Link></li>
                <li className="nav-item dropdown">
                  <Link to="/Login" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">團體</Link>
                  <div className="dropdown-menu">
                    <Link to="/Login" className="dropdown-item">日本旅遊</Link>
                    <Link to="/Login" className="dropdown-item">歐洲旅遊</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
