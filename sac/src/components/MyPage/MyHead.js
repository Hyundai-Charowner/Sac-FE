import React from "react";
import '../../styles/MyPage.css';
import userDefaultImage from '../../assets/image/userDefault.png';


function MyHead() {
    const userImage = ""; // 받아온 userImage 변수
    const imageSrc = userImage ? userImage : userDefaultImage; // userImage가 없을 때 userDefaultImage로 변경

    return (
    <div className="header">
        <div className="user-info">
            <img src={imageSrc} alt="userImage" className="my-image"/>
            <div className="user-info-text">
                <div className="user-name">사용자 이름</div>
                <div className="user-email">사용자 이메일</div>
            </div>
        </div>
    </div>
    
    );

}

export default MyHead;