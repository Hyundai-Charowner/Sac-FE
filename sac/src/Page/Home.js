import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from '../components/Header/Header';
import LeftNavi from '../components/Navi/LeftNavi/LeftNavi';
import RightNavi from '../components/Navi/RightNavi/RightNavi';
import Post from '../components/Post/Post';
import PostButton from '../components/Post/PostButton';
import PostDetail from '../components/Post/PostDetail';
import '../styles/Home.css';
import customModalStyles from '../styles/Modal';

function Home() {
  const [isPostDetailOpen, setIsPostDetailOpen] = useState(false);

  const openPostDetailModal = () => {
    setIsPostDetailOpen(true);
  };

  const closePostDetailModal = () => {
    setIsPostDetailOpen(false);
  };

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
            <div className='post-button-container'>
                <PostButton />
            </div>
            <Post onClick={openPostDetailModal} />
            <Post onClick={openPostDetailModal} />
            <Post onClick={openPostDetailModal} />
            <Post onClick={openPostDetailModal} />
            <Post onClick={openPostDetailModal} />
            <Post onClick={openPostDetailModal} />
            <Post onClick={openPostDetailModal} />
            <Post onClick={openPostDetailModal} />
            <Modal
                isOpen={isPostDetailOpen}
                onRequestClose={closePostDetailModal}
                style={customModalStyles}
            >
                <PostDetail />
            </Modal>
        </div>
        <div className='navi'>
          <RightNavi />
        </div>
      </div>
    </div>
  );
}

export default Home;
