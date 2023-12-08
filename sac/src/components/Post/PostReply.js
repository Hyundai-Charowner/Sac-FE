import React from "react";
import '../../styles/PostReply.css';
import Reply from './Reply';

const PostReply = () => {
    return (
        <div className="post-reply">
            <Reply />
            <Reply />
            <Reply />
            <Reply />
        </div>
    );

};

export default PostReply;