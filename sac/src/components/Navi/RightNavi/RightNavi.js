import React from "react";
import "../../../styles/RightNavi.css";
import discordIcon from '../../../assets/image/discord.png';

function RightNavi() {
  return (
    <div className="right-navi">
        <div className="navi-box">
            <div className="box-header">
                <p className="box-header-icon">🔥</p>
                <p className="box-header-text">트렌딩 토픽</p>
            </div>
            <div className="box-body">
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>

            </div>
        </div>

        <div className="navi-box">
            <div className="box-header">
                <p className="box-header-icon">🏅</p>
                <p className="box-header-text">이달의 열정 새싹</p>
            </div>
            <div className="box-body">
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>
                <div className="body-item">
                    <p className="body-item-rank">1</p>
                    <p className="body-item-icon">🌕</p>
                    <p className="body-item-text">전체</p>
                </div>
                <div className="body-more-container">
                    <button className="body-item-more">더보기</button>
                </div>
                

            </div>
        </div>

        <div className="navi-box">
            <div className="box-header">
                <p className="box-header-icon">🙏</p>
                <p className="box-header-text">문의하기</p>
            </div>
            <div className="box-body">
                <div className="body-inquiry">
                    <p className="inquiry-icon">📧</p>
                    <p className="inquiry-text">관리자 이메일</p>
                </div>
                <div className="body-inquiry">
                    <img src={discordIcon} alt="Discord Icon" className="inquiry-icon" />
                    <p className="inquiry-text">디스코드 서버</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default RightNavi;
