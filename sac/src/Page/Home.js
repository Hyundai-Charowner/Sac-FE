import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Header from '../components/Header/Header';
import LeftNavi from '../components/Navi/LeftNavi/LeftNavi';
import RightNavi from '../components/Navi/RightNavi/RightNavi';
import Post from '../components/Post/Post';
import PostButton from '../components/Post/PostButton';
import PostDetail from '../components/Post/PostDetail';
import '../styles/Home.css';
import customModalStyles from '../styles/Modal';
import axiosInstance from "../utils/api.js";

function Home() {
  const [isPostDetailOpen, setIsPostDetailOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const openPostDetailModal = () => {
    setIsPostDetailOpen(true);
  };

  const closePostDetailModal = () => {
    setIsPostDetailOpen(false);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace the URL with your actual API endpoint
        const response = await axiosInstance.post(`/posts/page`,
        {
          pageNum: 1
        });

        setPosts(response.data.posts);
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      }
    };

    fetchPosts();
  }, []);

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
          {posts.map((post) => (
            <Post key={post.post_id} onClick={openPostDetailModal} post={post} />
          ))}
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
