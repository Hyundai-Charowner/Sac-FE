import logo from '../../assets/image/logo.png';
import React, { useState, useEffect } from 'react';
import searchIcon from '../../assets/image/search.png';
import '../../styles/Header.css';
import UserInfo from '../User/UserInfo';

function Header() {
    const [searchText, setSearchText] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // localStorage에서 loginSession 확인
        const loginSession = localStorage.getItem('loginSession');
        setIsLoggedIn(!!loginSession); // loginSession이 존재하면 true, 아니면 false로 설정
    }, []);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
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
                        <button className='login-button'>로그인</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
