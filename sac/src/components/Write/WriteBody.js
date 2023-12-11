import React, { useRef, useState } from "react";
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
        // 본문으로 사용
        setBody(editorContent);
    };

    const handleTitleChange = (event) => {
        // 입력창에서 받은 타이틀 값을 상태 변수에 저장
        setTitle(event.target.value);
    };

    const handleSubmit = () => {
        // 여기에 submit 버튼을 클릭했을 때 수행할 동작을 추가
        console.log('Title:', title);
        console.log('Body:', body);
        navigate('/');
    };

    const handleCancle = () => {
        navigate('/');
    }


    return (
        <div className="markdown-editor">
            <input className="title-input"
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
                <button className="submit-button" 
                onClick={handleSubmit}>등록하기</button>

                <button className="submit-button" 
                onClick={handleCancle}>취소하기</button>
            </div>
        </div>
    );
}

export default WriteBody;
