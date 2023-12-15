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
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("전체");

  const openPostDetailModal = (postId) => {
    setSelectedPostId(postId);
    setIsPostDetailOpen(true);
  };

  const closePostDetailModal = () => {
    setIsPostDetailOpen(false);
  };

  const fetchMorePosts = async () => {
    try {
      console.log('fetching more posts');
      const response = await axiosInstance.post(`/posts/page`, {
        pageNum: pageNum,
      });
      setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
      setPageNum((prevPageNum) => prevPageNum + 1);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  const fetchPosts = async (boardId) => {
    try {
      const response = await axiosInstance.get(`/posts/board/${boardId}`);

      setPosts(response.data.posts);

    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  }

  useEffect(() => {
    setPosts([]); // Clear posts when selectedTopic changes
    if (selectedTopic !== "전체") {
      fetchPosts(selectedTopic);
    }
  }, [selectedTopic]);

  const handleScroll = () => {
    const mainDiv = document.querySelector('.main');
    const scrollTop = mainDiv.scrollTop;
    const scrollHeight = mainDiv.scrollHeight;
    const clientHeight = mainDiv.clientHeight;

    if (selectedTopic === "전체" && scrollTop + clientHeight + 20 >= scrollHeight && !loading) {
      fetchMorePosts();
    }
  };

  useEffect(() => {
    const mainDiv = document.querySelector('.main');
    mainDiv.addEventListener('scroll', handleScroll);

    return () => {
      mainDiv.removeEventListener('scroll', handleScroll);
    };
  }, [loading, selectedTopic, pageNum]);

  useEffect(() => {
    if (selectedTopic === "전체"){
      fetchMorePosts();
    } 
  }, [selectedTopic]);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <div className='navi'>
          <LeftNavi selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
        </div>
        <div className="main">
          <div className='post-button-container'>
            <PostButton />
          </div>
          {posts.map((post) => (
            <Post key={post.post_id} onClick={() => openPostDetailModal(post.post_id)} post={post} />
          ))}
          <Modal
            isOpen={isPostDetailOpen}
            onRequestClose={closePostDetailModal}
            style={customModalStyles}
          >
            <PostDetail postId={selectedPostId} />
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
