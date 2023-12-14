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

    title = "이승민...."
    content = "<h3>이승민 실화냐??</h3>"
    commentCount = 10
    heartCount = 20
    viewsCount = 30
    

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
