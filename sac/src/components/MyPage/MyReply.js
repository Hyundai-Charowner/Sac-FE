import React from "react";
import Reply from "../commons/Reply";
import '../../styles/MyPageBody.css';

function MyReply() {
    return (
        <div className="my-body-post">
            <div className="my-reply-content">
                <Reply />
                <div className="my-reply-title">
                    <div className="my-reply-title-text">이승민은 신인가?? </div>
                    <div className="my-reply-title-explain">에 남긴 댓글</div>
                </div>
            </div>
            <div className="my-reply-content">
                <Reply />
                <div className="my-reply-title">
                    <div className="my-reply-title-text">이승민은 신인가?? </div>
                    <div className="my-reply-title-explain">에 남긴 댓글</div>
                </div>
            </div>
            <div className="my-reply-content">
                <Reply />
                <div className="my-reply-title">
                    <div className="my-reply-title-text">이승민은 신인가?? </div>
                    <div className="my-reply-title-explain">에 남긴 댓글</div>
                </div>
            </div>
            <div className="my-reply-content">
                <Reply />
                <div className="my-reply-title">
                    <div className="my-reply-title-text">이승민은 신인가?? </div>
                    <div className="my-reply-title-explain">에 남긴 댓글</div>
                </div>
            </div>
        </div>
    );
}

export default MyReply;