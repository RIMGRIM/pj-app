import React, { Component } from 'react';

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
                <li className="nav-item active"><a className="nav-link" href="ex5.html">機票</a></li>
                <li className="nav-item"><a className="nav-link" href="ex5.html">訂房</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="ex5.html" data-bs-toggle="dropdown">團體</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="ex5.html">日本旅遊</a>
                    <a className="dropdown-item" href="ex5.html">歐洲旅遊</a>
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
