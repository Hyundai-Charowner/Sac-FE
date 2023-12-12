import React from "react";
import userDefaultImage from '../../assets/image/userDefault.png';
import '../../styles/PostReply.css';

const Reply = () => {
    return (
        <div className="reply">
            <div className="reply-header">
                <div className="reply-image">
                    <img src={userDefaultImage} alt='User' />
                </div>
                <div className="reply-info">
                    <div className="reply-username">유저네임</div>
                    <div className="reply-timestamp">타임스탬프</div>
                </div>
            </div>
            <div className="reply-body">
                <div className="reply-content-text">댓글 내용123123123</div>
            </div>
        </div>
    );

};

export default Reply;