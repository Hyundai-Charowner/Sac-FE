import React from "react";

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

export default TopicItem;