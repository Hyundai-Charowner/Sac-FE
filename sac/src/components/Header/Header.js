import logo from '../../assets/image/logo.png';
import React, { useState, useEffect } from 'react';
import searchIcon from '../../assets/image/search.png';
import '../../styles/Header.css';
import UserInfo from '../User/UserInfo';
import Modal from 'react-modal'; // 모달 라이브러리 import
import GoogleLogInButton from '../../components/Login/GoogleLogInButton';
import customModalStyles from '../../styles/Modal';

function Header() {
    const [searchText, setSearchText] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    useEffect(() => {
        // localStorage에서 loginSession 확인
        const loginSession = localStorage.getItem('loginSession');
        setIsLoggedIn(!!loginSession); // loginSession이 존재하면 true, 아니면 false로 설정
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

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-left">
                    <a href='/'><img src={logo} alt="Logo" className="logo" /></a>
                    <div className="search-container">
                        <img src={searchIcon} alt="Search Icon" className="search-icon" />
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleSearchChange}
                            placeholder="관심사 검색하기"
                            className="search-input"
                        />
                    </div>
                </div>
                <div className="header-right">
                    <div className="etc">
                        <p className='etc-work'>사이트 소개</p>
                        <p className='etc-work'>토픽 둘러보기</p>
                        <p className='etc-work'>MY 토픽</p>
                        <p className='etc-work'>새싹 홈</p>
                    </div>
                    {isLoggedIn ? (
                        <UserInfo />
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
                // 모달 스타일 등 추가 설정 가능
            >
                <GoogleLogInButton />
            </Modal>
        </div>
    );
}

export default Header;
