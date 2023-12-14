import React, { useState, useEffect, useRef } from 'react';
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
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const mainRef = useRef(null);

  const openPostDetailModal = (post) => {
    setSelectedPost(post);
    setIsPostDetailOpen(true);
  };

  const closePostDetailModal = () => {
    setSelectedPost(null);
    setIsPostDetailOpen(false);
  };

  const fetchMorePosts = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post(`/posts/page`, {
        pageNum: pageNum + 1
      });
      setPosts(prevPosts => [...prevPosts, ...response.data.posts]);
      setPageNum(prevPageNum => prevPageNum + 1);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !loading) {
      fetchMorePosts();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const response = await axiosInstance.post(`/posts/page`, {
          pageNum: 1
        });
        setPosts(response.data.posts);
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      }
    };

    fetchInitialPosts();
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
        <div className="main" ref={mainRef}>
          <div className='post-button-container'>
            <PostButton />
          </div>
          {posts.map((post) => (
            <Post key={post.post_id} onClick={() => openPostDetailModal(post)} post={post} />
          ))}
          <Modal
            isOpen={isPostDetailOpen}
            onRequestClose={closePostDetailModal}
            style={customModalStyles}
          >
            {selectedPost && <PostDetail post={selectedPost} />}
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
