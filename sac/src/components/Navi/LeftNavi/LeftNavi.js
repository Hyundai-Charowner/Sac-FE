import React from "react";
import "../../../styles/LeftNavi.css";

const topics = ["프론트엔드", "백엔드", "맛집", "전자기기", "축구", "영화", "건강", "문화생활", "뷰티", "음주", "연애", "예능", "드라마"];

function LeftNavi() {
    return (
        <div className="left-navi">
            <div className="topic-head">
                <p className="topic-head-icon">✨</p>
                <p className="topic-head-text">토픽</p>
            </div>

            <div className="topic-item">
                <p className="topic-item-icon">🌕</p>
                <p className="topic-item-text">전체</p>
            </div>

            <div className="topic-list">
                {topics.map((topic, index) => (
                    <TopicItem key={index} topic={topic} />
                ))}
            </div>
        </div>
    );
}

//토픽을 나타내는 컴포넌트
function TopicItem({ topic }) {
    let icon = "🌱";
    if (topic === "프론트엔드") {
        icon = "🌈";
    } else if (topic === "백엔드") {
        icon = "💻";
    } else if (topic === "맛집") {
        icon = "🍔";
    } else if (topic === "전자기기") {
        icon = "📱";
    } else if (topic === "축구") {
        icon = "⚽️";
    } else if (topic === "영화") {
        icon = "🎬";
    } else if (topic === "건강") {
        icon = "🏋️‍♀️";
    } else if (topic === "문화생활") {
        icon = "🎨";
    } else if (topic === "뷰티") {
        icon = "💄";
    } else if (topic === "음주") {
        icon = "🍺";
    }
    else if (topic === "연애") {
        icon = "💕";
    }
    else if (topic === "예능") {
        icon = "🤣";
    }
    else if (topic === "드라마") {
        icon = "📺";
    }

    return (
        
        <div className="topic-item">
            <p className="topic-item-icon">{icon}</p>
            <p className="topic-item-text">{topic}</p>
        </div>
    );
}

export default LeftNavi;