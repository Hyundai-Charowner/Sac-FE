import React from "react";
import '../../styles/PostReply.css';

const Reply = ({reply}) => {
    return (
        <div className="reply">
            <div className="reply-header">
                <div className="reply-image">
                    <img src={reply.user_image} alt='User' style={{ borderRadius: '50%' }}/>
                </div>
                <div className="reply-info">
                    <div className="reply-username">{reply.user_name}</div>
                    <div className="reply-timestamp">{reply.created_date}</div>
                </div>
            </div>
            <div className="reply-body">
                <div className="reply-content-text">{reply.reply_content}</div>
            </div>
        </div>
    );

};

export default Reply;