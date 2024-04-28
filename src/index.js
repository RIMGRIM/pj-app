import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Carousel from './component/Carousel';
import Content from './component/Content';
import Add from './component/Add';
import A from './component/A';
import B from './component/B';
import C from './component/C';
import D from './component/D';

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
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


function Home() {
  return (
    <>
      <Carousel />
      <Main />
      <Content />
      <Add />
    </>
  );
}