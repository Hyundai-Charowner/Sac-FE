import React from 'react';
import Header from './PostHeader';
import Body from './PostBody';
import '../../styles/Post.css';
import PostReply from './PostReply';
import ReplyEdit from './ReplyEdit';

const PostDetail = ({ imageUrl, username, timestamp, topic, title, content}) => {
    
    content = "<h3>이승민 실화냐?? 그는 진짜 전설이다..</h3>"
    
    return (
        <div className='post-detail'>
            <Header imageUrl={imageUrl} username={username} timestamp={timestamp} topic={topic} />

            <Body title={title} content={content} />
            <div className='divider-detail' />
            <PostReply />
            <ReplyEdit />
        </div>
    );
};

export default PostDetail;
