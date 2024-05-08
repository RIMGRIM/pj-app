import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Carousel from './component/Carousel';
import Add from './component/Add';
import A from './component/page/A';
import B from './component/page/B';
import C from './component/page/C';
import D from './component/page/D';
import Login from './component/page/Login';
import AddMember from './component/AddMember';


function Home() {
  const images = [
    '/pic/J-1.jpg',
    '/pic/J-2.jpg',
    '/pic/J-3.jpg',
    '/pic/E-1.jpg',
    '/pic/E-2.jpg',
    '/pic/E-3.jpg',
  ];

  return (
    <>
      <Carousel images={images} />
      <hr/>
      <Main />
      <hr/>
      <Add />
      <hr/>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A" element={<A />} />
        <Route path="/B" element={<B />} />
        <Route path="/C" element={<C />} />
        <Route path="/D" element={<D />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddMember" element={<AddMember />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();