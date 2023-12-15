import React, { useState, useEffect } from "react";
import '../../styles/MyPage.css';
import TopicItem from "../commons/TopicItem";
import userDefaultImage from '../../assets/image/userDefault.png';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/api.js";

function MyHead() {
    const userImage = ""; // 받아온 userImage 변수
    const imageSrc = userImage ? userImage : userDefaultImage; // userImage가 없을 때 userDefaultImage로 변경
    const navigate = useNavigate();
    const [likeTopics, setLikeTopics] = useState(null);

    const handleMoveToTopic = () => {
        navigate("/topics");
    }

    const fetchLikeTopic = async () => {
        try {
            const response = await axiosInstance.get("/user/boards");
            setLikeTopics(response.data.likeList);
        } catch (error) {
            console.error('Failed to fetch liked topics:', error);
            setLikeTopics([]);
        }
    };

    useEffect(() => {
        fetchLikeTopic();
    }, []);


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
                <div className="my-topic-title">
                    MY 토픽
                    <button className="my-topic-edit" onClick={handleMoveToTopic}>편집</button>    
                </div>
                <div className="my-topic-list">
                {likeTopics && likeTopics.length > 0 && likeTopics.map((topic, index) => (
                    <TopicItem
                        key={index}
                        topic={topic}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default MyHead;