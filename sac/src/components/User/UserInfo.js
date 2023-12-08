import React, { useState, useRef, useEffect } from "react";
import defaultImage from '../../assets/image/userDefault.png';
import '../../styles/UserInfo.css'; // UserInfo 스타일 추가

function UserInfo() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const overlayRef = useRef(null);

    const handleButtonClick = () => {
        setIsOverlayVisible(!isOverlayVisible);
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
                    <p>Overlay Content</p>
                </div>
            )}
        </div>
    );
}

export default UserInfo;
