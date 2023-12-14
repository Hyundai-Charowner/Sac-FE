import React from "react";
import '../../styles/PostReply.css';
import uploadImage from '../../assets/image/upload.png';

const ReplyEdit = ({ postId }) => {

    

    return (
        console.log(postId),
        <div className="reply-edit">
            <input type="text" placeholder="댓글을 입력하세요" className="reply-input"/>
            <img src ={uploadImage} alt ="upload" className="upload-button"/>
        </div>
    );
}

export default ReplyEdit;