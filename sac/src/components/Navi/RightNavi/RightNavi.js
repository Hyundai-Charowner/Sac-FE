import React, { useState, useEffect }from "react";
import "../../../styles/RightNavi.css";
import discordIcon from '../../../assets/image/discord.png';
import customModalStyles from '../../../styles/Modal';
import Modal from 'react-modal';
import axiosInstance from "../../../utils/api.js";

function RightNavi() {
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [hotTopics, setHotTopics] = useState([]);
    const [hotSaccers, setHotSaccers] = useState([]);

    useEffect(() => {
        fetchHotTopic();
        fetchHotSaccers();
    }, []);


    const openEmailModal = () => {
        setIsEmailModalOpen(true);
    };

    const closeEmailModal = () => {
        setIsEmailModalOpen(false);
    };

    const fetchHotTopic = async () => {
        try {
            const response = await axiosInstance.get("/ranking/topic");
            setHotTopics(response.data);
        } catch (error) {
            console.error('데이터 가져오기 실패:', error);
        }
    };

    const fetchHotSaccers = async () => {
        try {
            const response = await axiosInstance.get("/ranking/passion");
            setHotSaccers(response.data);
        } catch (error) {
            console.error('데이터 가져오기 실패:', error);
        }
    };

    const handleCopyEmail = () => {
        const emailText = "sesac.sac@gmail.com";

        const tempElement = document.createElement("textarea");
        tempElement.value = emailText;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand("copy");
        document.body.removeChild(tempElement);

        openEmailModal(); // 이메일 복사 시 모달 열기
    };

    const handleCopyDiscord = () => {
        const discordText = "https://discord.gg/BtX6DYav";
        window.open(discordText, "_blank");
    }

    const getIconForTopic = (topic) => {
        switch (topic) {
            case "프론트엔드":
                return "🌈";
            case "백엔드":
                return "💻";
            case "맛집":
                return "🍔";
            case "전자기기":
                return "📱";
            case "축구":
                return "⚽️";
            case "영화":
                return "🎬";
            case "건강":
                return "🏋️‍♀️";
            case "문화생활":
                return "🎨";
            case "뷰티":
                return "💄";
            case "음주":
                return "🍺";
            case "연애":
                return "💕";
            case "예능":
                return "🤣";
            case "드라마":
                return "📺";
            default:
                return "🌕";
        }
    };
        

  return (
    <div className="right-navi">
        <div className="navi-box">
            <div className="box-header">
                <p className="box-header-icon">🔥</p>
                <p className="box-header-text">트렌딩 토픽</p>
            </div>
            <div className="box-body">
                {hotTopics.map((topic, index) => (
                    <div className="body-item" key={index}>
                        <p className="body-item-rank">{index + 1}</p>
                        <p className="body-item-icon">{getIconForTopic(topic)}</p>
                        <p className="body-item-text">{topic}</p>
                    </div>
                ))} 
            </div>
        </div>

        <div className="navi-box">
            <div className="box-header">
                <p className="box-header-icon">🏅</p>
                <p className="box-header-text">이달의 열정 새싹</p>
            </div>
            <div className="box-body">
                {hotSaccers.map((topic, index) => (
                    <div className="body-item" key={index}>
                        <p className="body-item-rank">{index + 1}</p>
                        <p className="body-item-icon">{getIconForTopic(topic)}</p>
                        <p className="body-item-text">{topic}</p>
                    </div>
                ))} 
            </div>
        </div>

        <div className="navi-box">
            <div className="box-header">
                <p className="box-header-icon">🙏</p>
                <p className="box-header-text">문의하기</p>
            </div>
            <div className="box-body">
                <div className="body-inquiry" onClick={handleCopyEmail}>
                    <p className="inquiry-icon">📧</p>
                    <p className="inquiry-text">관리자 이메일</p>
                </div>
                <div className="body-inquiry" onClick={handleCopyDiscord}>
                    <img src={discordIcon} alt="Discord Icon" className="inquiry-icon" />
                    <p className="inquiry-text">디스코드 서버</p>
                </div>
            </div>
        </div>

        <Modal
            isOpen={isEmailModalOpen}
            onRequestClose={closeEmailModal}
            style={customModalStyles}
        >
            <div className="alert-modal">
                <p>이메일이 클립보드에 복사되었습니다.</p>
                <button onClick={closeEmailModal} className="button-close">닫기</button>
            </div>
        </Modal>
    </div>
  );
}

export default RightNavi;
