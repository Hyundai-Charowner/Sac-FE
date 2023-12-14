import React from 'react';
import Header from './PostHeader';
import Body from './PostBody';
import Footer from './PostFooter';
import '../../styles/Post.css';

// Post 컴포넌트
const Post = ({ post, onClick }) => {
    const handleClick = () => {
      if (onClick) {
        onClick(post.post_id);
      }
    };

    if (post.post_id === 1) {
      post.board_category = "프론트엔드"
    } else if (post.board_id === 2) {
      post.board_category = "백엔드"
    } else if (post.board_id === 3) {
      post.board_category = "맛집"
    } else if (post.board_id === 4) {
      post.board_category = "전자기기"
    } else if (post.board_id === 5) {
      post.board_category = "축구"
    } else if (post.board_id === 6) {
      post.board_category = "영화"
    } else if (post.board_id === 7) {
      post.board_category = "건강"
    } else if (post.board_id === 8) {
      post.board_category = "문화생활"
    } else if (post.board_id === 9) {
      post.board_category = "뷰티"
    } else if (post.board_id === 10) {
      post.board_category = "음주"
    } else if (post.board_id === 11) {
      post.board_category = "연애"
    } else if (post.board_id === 12) {
      post.board_category = "예능"
    } else if (post.board_id === 13) {
      post.board_category = "드라마"
    }

    return (
      <div className='post'>
        <div className='post_click' onClick={handleClick}>
          <Header imageUrl={post.user_image} username={post.user_name} timestamp={post.created_date} topic={post.board_category} />
          <Body title={post.post_head} content={post.post_content} />
        </div>
        <Footer commentCount={post.reply_count} initialHeartCount={post.post_likes} viewsCount={post.post_count} postId={post.post_id}/>
      </div>
    );
};
  

export default Post;
