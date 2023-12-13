import React, { useRef, useState } from "react";
import axiosInstance from "../../utils/api.js";
import '@toast-ui/editor/dist/toastui-editor.css';
import '../../styles/Write.css';

import { Editor } from '@toast-ui/react-editor';
import { useNavigate } from "react-router-dom";

const WriteBody = () => {
    const editorRef = useRef(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleContentChange = () => {
        const editorContent = editorRef.current.getInstance().getMarkdown();
        setBody(editorContent);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axiosInstance.post("/posts", {
                board_id: 1,
                post_head: title,
                post_content: body
            });

            console.log('API 응답:', response.data);
            navigate('/');
        } catch (error) {
            console.error('API 요청 실패:', error);
            console.error('token', localStorage.getItem('jwtToken'));
        }
    };
    
    

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="markdown-editor">
            <input
                className="title-input"
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="제목을 입력하세요."
            />
            <div className="body-input">
                <Editor
                    ref={editorRef}
                    initialValue=""
                    previewStyle="vertical"
                    height="35rem"
                    initialEditType="markdown"
                    useCommandShortcut={false}
                    language="ko-KR"
                    hideModeSwitch={true}
                    onChange={handleContentChange}
                />
            </div>
            <div className="footer">
                <button className="submit-button" onClick={handleSubmit}>등록하기</button>
                <button className="submit-button" onClick={handleCancel}>취소하기</button>
            </div>
        </div>
    );
}

export default WriteBody;
