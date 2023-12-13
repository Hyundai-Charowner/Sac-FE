import React, { useRef, useState } from "react";
import axiosInstance from "../../utils/api.js";
import Modal from "react-modal";
import customModalStyles from '../../styles/Modal';
import '@toast-ui/editor/dist/toastui-editor.css';
import '../../styles/Write.css';
import { Editor } from '@toast-ui/react-editor';
import { useNavigate } from "react-router-dom";

const WriteBody = () => {
    const editorRef = useRef(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [showModal, setShowModal] = useState(false); // 모달 표시 여부
    const [showFooterText, setShowFooterText] = useState(false); // footer-text 표시 여부
    const [shakeEditor, setShakeEditor] = useState(false); // editor 흔들림 여부
    const navigate = useNavigate();

    const handleContentChange = () => {
        const editorContent = editorRef.current.getInstance().getMarkdown();
        setBody(editorContent);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = async () => {
        if (!title.trim() || !body.trim()) {
            setShowFooterText(true);
            setShakeEditor(true);

            // 0.2초 후 흔들림 효과 제거
            setTimeout(() => {
                setShakeEditor(false);
            }, 200);

            return;
        }

        try {
            const response = await axiosInstance.post("/posts", {
                board_id: 1,
                post_head: title,
                post_content: body
            });

            console.log('API 응답:', response.data);

            // 성공 시 모달 표시
            setShowModal(true);
        } catch (error) {
            console.error('API 요청 실패:', error);
            console.error('token', localStorage.getItem('jwtToken'));
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/');
    };

    return (
        <div className={`markdown-editor ${shakeEditor ? 'shake' : ''}`}>
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
                {showFooterText && <div className="footer-text">내용을 입력해주세요.</div>}
                <div className="footer-button">
                    <button className="submit-button-post" onClick={handleSubmit}>등록하기</button>
                    <button className="submit-button-cancel" onClick={handleCancel}>취소하기</button>
                </div>
            </div>

            <Modal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                style={customModalStyles}
                backgroundColor="white"
            >   
                <div className="post-modal">
                    <div className="post-modal-text">게시글이 등록되었습니다.</div>
                    <button onClick={handleCloseModal} className="post-modal-button">확인</button>
                </div>
            </Modal>

        </div>
    );
}

export default WriteBody;
