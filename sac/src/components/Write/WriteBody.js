import React, { useRef, useState } from "react";
import axiosInstance from "../../utils/api.js";
import Modal from "react-modal";
import customModalStyles from '../../styles/Modal';
import '@toast-ui/editor/dist/toastui-editor.css';
import '../../styles/Write.css';
import { Editor } from '@toast-ui/react-editor';
import { useNavigate } from "react-router-dom";

const WriteBody = (postId) => {
    const editorRef = useRef(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [boardId, setBoardId] = useState('1'); // 기본값으로 '1'을 설정
    const [showModal, setShowModal] = useState(false);
    const [showFooterText, setShowFooterText] = useState(false);
    const [shakeEditor, setShakeEditor] = useState(false);
    const navigate = useNavigate();

    const handleContentChange = () => {
        const editorContent = editorRef.current.getInstance().getMarkdown();
        setBody(editorContent);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBoardChange = (event) => {
        setBoardId(event.target.value);
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
                board_id: boardId, // 업데이트된 boardId를 사용
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
            <div className="category-selector">
                <div className="category-text">카테고리</div>
                <select
                    className="category-select"
                    value={boardId} // 현재 선택된 boardId로 설정
                    onChange={handleBoardChange} // 변화가 있을 때 호출
                >
                    <option value="1">프론트엔드</option>
                    <option value="2">백엔드</option>
                    <option value="3">맛집</option>
                    <option value="4">전자기기</option>
                    <option value="5">축구</option>
                    <option value="6">영화</option>
                    <option value="7">건강</option>
                    <option value="8">문화생활</option>
                    <option value="9">뷰티</option>
                    <option value="10">음주</option>
                    <option value="11">연애</option>
                    <option value="12">예능</option>
                    <option value="13">드라마</option>
                </select>
            </div>
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
