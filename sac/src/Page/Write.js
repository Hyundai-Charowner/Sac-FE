import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from '../components/Header/Header';
import LeftNavi from '../components/Navi/LeftNavi/LeftNavi';
import RightNavi from '../components/Navi/RightNavi/RightNavi';
import Post from '../components/Post/Post';
import PostDetail from '../components/Post/PostDetail';
import '../styles/Home.css';
import customModalStyles from '../styles/Modal';

function Write() {

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <div className='navi'>
          <LeftNavi />
        </div>
        <div className="main">
          gdgdgdgd
        </div>
        <div className='navi'>
          <RightNavi />
        </div>
      </div>
    </div>
  );
}

export default Write;
