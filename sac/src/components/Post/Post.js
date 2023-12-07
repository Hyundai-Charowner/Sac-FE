import React from 'react';
import Header from './PostHeader';
import Body from './PostBody';
import Footer from './PostFooter';
import '../../styles/Post.css';

const Post = ({ imageUrl, username, timestamp, topic, title, content, commentCount, heartCount, viewsCount }) => {
    return (
        <div className='post'>
            <Header imageUrl={imageUrl} username={username} timestamp={timestamp} topic={topic} />

            <Body title={title} content={content} />

            <Footer commentCount={commentCount} heartCount={heartCount} viewsCount={viewsCount} />
        </div>
    );
};

export default Post;
