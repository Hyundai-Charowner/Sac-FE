import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/api.js';
import Header from './PostHeader';
import Body from './PostBody';
import Reply from '../commons/Reply';
import ReplyEdit from './ReplyEdit';

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [replies, setReplies] = useState(null);

  const fetchPostAndReplies = async () => {
    try {
      const response = await axiosInstance.get(`/posts/${postId}`);
      setPost(response.data.post);
      setReplies(response.data.reply);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  const updateReplies = async () => {
    try {
        await fetchPostAndReplies();
        // 화면을 맨 위로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Failed to fetch replies:', error);
    }
  };

  useEffect(() => {
    fetchPostAndReplies();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      <Header
        imageUrl={post.user_image}
        username={post.user_name}
        timestamp={post.created_date}
        topic={post.board_category}
      />
      <Body title={post.post_head} content={post.post_content} />
      <div className="divider-detail" />
      {replies &&
        replies.map((replyObject, index) => (
          <div className="post-reply" key={index}>
            <Reply reply={replyObject} />
          </div>
        ))}
      <ReplyEdit postId={post.post_id} updateReplies={updateReplies} />
    </div>
  );
};

export default PostDetail;
