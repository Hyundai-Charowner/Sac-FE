import React from 'react';
import Header from './PostHeader';
import Body from './PostBody';
import Footer from './PostFooter';
import '../../styles/Post.css';
import PostReply from './PostReply';
import ReplyEdit from './ReplyEdit';

const PostDetail = ({ imageUrl, username, timestamp, topic, title, content, commentCount, heartCount, viewsCount }) => {
    return (
        <div className='post'>
            <Header imageUrl={imageUrl} username={username} timestamp={timestamp} topic={topic} />

            <Body title={title} content={content} />
            <div className='divider' />
            <PostReply />
            <ReplyEdit />
        </div>
    );
};

export default PostDetail;
