import React from 'react';
import Header from './PostHeader';
import Body from './PostBody';
import Footer from './PostFooter';
import '../../styles/Post.css';

const Post = ({ imageUrl, username, timestamp, topic, title, content, commentCount, heartCount, viewsCount, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className='post' >
            <div className='post_click' onClick={handleClick}>
                <Header imageUrl={imageUrl} username={username} timestamp={timestamp} topic={topic} />
                <Body title={title} content={content} />
            </div>
            <Footer commentCount={commentCount} heartCount={heartCount} viewsCount={viewsCount} />
        </div>
    );
};

export default Post;
