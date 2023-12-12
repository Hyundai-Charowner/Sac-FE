import React from "react";
import "../../../styles/LeftNavi.css";
import TopicItem from "../../commons/TopicItem";

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


export default LeftNavi;