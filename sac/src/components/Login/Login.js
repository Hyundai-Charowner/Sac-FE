import React from 'react';
import communityImage from "../../assets/image/community.png";
import talkImage from "../../assets/image/talk.png";
import "../../styles/Login.css";
import GoogleLogInButton from './GoogleLogInButton';
// import googleIcon from "../../assets/image/googleIcon.png";


export default function Login() {
    return (
        <div className="login-padding">
            <div className="login-text">SAC 로그인</div>

            <div className="login-body">
                <div className="login-body-header">SAC은 새싹 연수생들을 위한 대화 공간입니다.</div>
                <div className="login-body-box">
                    <img src={communityImage} alt="logo" className="logo-image" />
                    <div className="login-body-text">다른 연수생들과 대화해보고 싶어요.</div>
                </div>
                <div className="login-body-box">
                    <img src={talkImage} alt="logo" className="logo-image2" />
                    <div className="login-body-text">나의 관심사를 주제로 얘기하고 싶어요.</div>
                </div>
            </div>
            <div className="google-login">
                <div className="login-footer">
                    <GoogleLogInButton />
                </div>
                {/* <div className="google-login-box">
                    <div className="google-login-image">
                        <img src={googleIcon} alt="googleIcon" />
                    </div>
                    <div className="google-login-text">구글로 시작하기</div>
                    <div className="google-login-blank"> </div>
                </div> */}
            </div>
        </div>
    );
}