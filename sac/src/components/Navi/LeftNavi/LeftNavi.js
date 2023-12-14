import React, { useState, useEffect } from "react";
import "../../../styles/LeftNavi.css";
import TopicItem from "../../commons/TopicItem";
import axiosInstance from "../../../utils/api.js";

function LeftNavi() {
    // useState to manage the selected topic
    const [selectedTopic, setSelectedTopic] = useState("전체");
    const [likeTopics, setLikeTopics] = useState(null);

    // Function to handle topic selection
    const handleTopicSelect = (topic) => {
        setSelectedTopic(topic);
    };

    // Fetch like topics when the component mounts
    useEffect(() => {
        fetchLikeTopic();
    }, []);

    // Function to fetch liked topics
    const fetchLikeTopic = async () => {
        try {
            const response = await axiosInstance.get("/user/boards");
            setLikeTopics(response.data.likeList);
        } catch (error) {
            console.error('Failed to fetch liked topics:', error);
            // Handle the error, you can set a default value or show an error message
            setLikeTopics([]);
        }
    };

    return (
        <div className="left-navi">
            <div className="topic-head">
                <p className="topic-head-icon">✨</p>
                <p className="topic-head-text">토픽</p>
            </div>

            <div className="topic-list">
                <TopicItem
                    topic="전체"
                    isSelected={selectedTopic === "전체"}
                    onSelect={() => handleTopicSelect("전체")}
                ></TopicItem>
                {likeTopics && likeTopics.length > 0 && likeTopics.map((topic, index) => (
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
