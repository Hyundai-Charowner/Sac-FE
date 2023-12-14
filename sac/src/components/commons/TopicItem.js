// TopicItem.js

import React from "react";
import PropTypes from "prop-types";
import "../../styles/LeftNavi.css";

function TopicItem({ topic, isSelected, onSelect }) {
    let icon = "🌱";
    if (topic === "전체") {
        icon = "🌕";
    }
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
    } else if (topic === "연애") {
        icon = "💕";
    } else if (topic === "예능") {
        icon = "🤣";
    } else if (topic === "드라마") {
        icon = "📺";
    }

    return (
        <div className={`topic-item ${isSelected ? "selected" : ""}`} onClick={onSelect}>
            <p className="topic-item-icon">{icon}</p>
            <p className="topic-item-text">{topic}</p>
        </div>
    );
}

TopicItem.propTypes = {
    topic: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default TopicItem;
