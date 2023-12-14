// LeftNavi.js

import React, { useState } from "react";
import "../../../styles/LeftNavi.css";
import TopicItem from "../../commons/TopicItem";

const topics = ["전체", "프론트엔드", "백엔드", "맛집", "전자기기", "축구", "영화", "건강", "문화생활", "뷰티", "음주", "연애", "예능", "드라마"];

function LeftNavi() {
    // useState를 사용하여 선택된 토픽을 관리
    const [selectedTopic, setSelectedTopic] = useState("전체");

    // 토픽을 선택할 때 호출되는 함수
    const handleTopicSelect = (topic) => {
        setSelectedTopic(topic);
    };

    return (
        <div className="left-navi">
            <div className="topic-head">
                <p className="topic-head-icon">✨</p>
                <p className="topic-head-text">토픽</p>
            </div>


            <div className="topic-list">
                {topics.map((topic, index) => (
                    <TopicItem
                        key={index}
                        topic={topic}
                        isSelected={selectedTopic === topic}
                        onSelect={() => handleTopicSelect(topic)}
                    />
                ))}
            </div>
        </div>
    );
}

export default LeftNavi;
