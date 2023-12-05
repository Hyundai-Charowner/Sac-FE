import logo from '../assets/image/logo.png';
import React, { useState } from 'react';
import searchIcon from '../assets/image/search.png';
import './Header.css';


function Header() {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-left">
                    <img src={logo} alt="Logo" className="logo" />
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
                    <p className='etc-work'>사이트 소개</p>
                    <p className='etc-work'>토픽 둘러보기</p>
                    <p className='etc-work'>MY 토픽</p>
                    <p className='etc-work'>새싹 홈</p>
                    <div className="divider"></div>
                    <button className='login-button'>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Header;

