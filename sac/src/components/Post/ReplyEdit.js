import React, { useState } from "react";
import '../../styles/PostReply.css';
import uploadImage from '../../assets/image/upload.png';
import axiosInstance from "../../utils/api.js";

const ReplyEdit = ({ postId }) => {
    const [replyContent, setReplyContent] = useState('');

    const handleupLoadReply = async () => {
        try {
            const response = await axiosInstance.post(`/posts/reply`, 
            {
                post_id: postId,
                reply_content: replyContent
            });
            console.log(response.data);
            // Optionally, clear the input after a successful upload
            setReplyContent('');
        } catch (error) {
            console.error('Failed to upload reply:', error);
        }
    };

    return (
        <div className="reply-edit">
            <input 
                type="text" 
                placeholder="댓글을 입력하세요" 
                className="reply-input" 
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
            />
            <img 
                src={uploadImage} 
                alt="upload" 
                className="upload-button"
                onClick={handleupLoadReply}
            />
        </div>
    );
}

export default ReplyEdit;
