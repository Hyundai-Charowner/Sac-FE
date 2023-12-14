// Header.js 파일

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import LogIn from '../../components/Login/Login';
import customModalStyles from '../../styles/Modal';
import ModalCancelButton from '../commons/ModalCancelButton';
import UserInfo from '../User/UserInfo';
import logo from '../../assets/image/logo.png';
import searchIcon from '../../assets/image/search.png';
import '../../styles/Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [searchText, setSearchText] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMyTopicModalOpen, setIsMyTopicModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loginSession = localStorage.getItem('jwtToken');
        setIsLoggedIn(!!loginSession);
    }, []);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const openMyTopicModal = () => {
        setIsMyTopicModalOpen(true);
    };

    const closeMyTopicModal = () => {
        setIsMyTopicModalOpen(false);
    };

    const goToIntroduce = () => {
        const discordText = "https://github.com/Hyundai-Charowner";
        window.open(discordText, "_blank");
    };

    const goToTopicLookAround = () => {
        navigate('/topics');
    }

    const goToMyTopic = () => {
        openMyTopicModal();
    }

    const goToSesacHome = () => {
        const discordText = "https://sesac.seoul.kr/common/greeting.do";
        window.open(discordText, "_blank");
    }

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-left">
                    <a href='/'><img src={logo} alt="Logo" className="logo" /></a>
                    <button className="search-container" onClick={goToMyTopic}>
                        <img src={searchIcon} alt="Search Icon" className="search-icon" />
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleSearchChange}
                            placeholder="관심사 검색하기"
                            className="search-input"
                        />
                    </button>
                </div>
                <div className="header-right">
                    <div className="etc">
                        <button className='etc-work' onClick={goToIntroduce}>사이트 소개</button>
                        <button className='etc-work' onClick={goToTopicLookAround}>토픽 둘러보기</button>
                        <button className='etc-work' onClick={goToMyTopic}>MY 토픽</button>
                        <button className='etc-work' onClick={goToSesacHome}>새싹 홈</button>
                    </div>
                    {isLoggedIn ? (
                        <UserInfo className="user-info"/>
                    ) : (
                        <button className='login-button' onClick={openLoginModal}>로그인</button>
                    )}
                </div>
            </div>
            {/* 모달 영역 */}
            <Modal
                isOpen={isLoginModalOpen}
                onRequestClose={closeLoginModal}
                style={customModalStyles}
            >
                <LogIn />
                <div className='close-modal'>
                    <ModalCancelButton onClick={closeLoginModal} />
                </div>
            </Modal>

            <Modal
                isOpen={isMyTopicModalOpen}
                onRequestClose={closeMyTopicModal}
                style={customModalStyles}
            >   
                <div className='close-modal'>
                    <div className='close-modal-text'>추후 구현 예정😥</div>
                    <ModalCancelButton onClick={closeMyTopicModal} />
                </div>
            </Modal>
        </div>
    );
}

export default Header;
