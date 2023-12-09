import React, { useState, useRef, useEffect } from "react";
import defaultImage from '../../assets/image/userDefault.png';
import '../../styles/UserInfo.css'; // UserInfo 스타일 추가

function UserInfo() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const overlayRef = useRef(null);

    const handleButtonClick = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    const handleLogout = () => {
        // 로그아웃 버튼 클릭 시 localStorage에서 loginSession 삭제
        localStorage.removeItem('loginSession');
        setIsOverlayVisible(false);

        // 페이지 새로고침
        window.location.reload();
    };

    const handleClickOutside = (event) => {
        if (overlayRef.current && !overlayRef.current.contains(event.target)) {
            setIsOverlayVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="user-info-container">
            <button className='user-button' onClick={handleButtonClick}>
                <img src={defaultImage} alt="userImage" />
            </button>

            {isOverlayVisible && (
                <div className='overlay' ref={overlayRef}>
                    <button className="overlay-contents-first">😀 마이페이지</button>
                    <button className="overlay-contents" onClick={handleLogout}>👋 로그아웃</button>
                </div>
            )}
        </div>
    );
}

export default UserInfo;
