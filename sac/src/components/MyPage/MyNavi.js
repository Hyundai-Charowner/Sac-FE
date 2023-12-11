import React from "react";
import '../../styles/MyPage.css';
import TopicItem from "../commons/TopicItem";
import userDefaultImage from '../../assets/image/userDefault.png';

const topics = ["프론트엔드", "백엔드", "맛집", "전자기기", "축구", "영화", "건강", "문화생활", "뷰티", "음주", "연애", "예능", "드라마"];

function MyHead() {
    const userImage = ""; // 받아온 userImage 변수
    const imageSrc = userImage ? userImage : userDefaultImage; // userImage가 없을 때 userDefaultImage로 변경

    return (
        <div className="my-navi">
            <div className="my-navi-header">
                <div className="user-info">
                    <img src={imageSrc} alt="userImage" className="my-image"/>
                    <div className="user-info-text">
                        <div className="user-name">이승민</div>
                        <div className="user-email">sodlqj5166@daum.net</div>
                    </div>
                </div>
            </div>
            <div className="my-navi-body">
                <div className="my-topic-title">MY 토픽</div>
                <div className="my-topic-list">
                    {topics.map((topic, index) => (
                        <TopicItem key={index} topic={topic} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyHead;