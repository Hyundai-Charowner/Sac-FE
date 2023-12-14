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
