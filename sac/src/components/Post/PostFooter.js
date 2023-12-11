import React, { useState } from 'react';
import commentImage from '../../assets/image/comment.png';
import heartTrueImage from '../../assets/image/heartTrue.png';
import heartFalseImage from '../../assets/image/heartFalse.png';
import shareImage from '../../assets/image/share.png';
import viewsImage from '../../assets/image/views.png';

const Footer = ({ commentCount, heartCount, viewsCount }) => {
    const [isHeartClicked, setIsHeartClicked] = useState(false);

    const handleHeartClick = () => {
        setIsHeartClicked(!isHeartClicked);
        heartCount = isHeartClicked ? heartCount - 1 : heartCount + 1;
    };

    return (
        <div className='post-footer'>
            <div className='post-footer-buttons'>
                <div className='post-button'>
                    <img src={commentImage} alt='Comment' className='footer-icon'/>
                    <div className='footer-text'>{commentCount}</div>
                </div>
                <button className='post-button' onClick={handleHeartClick}>
                    <img src={isHeartClicked ? heartTrueImage : heartFalseImage} alt='Heart' className='footer-icon'/>
                    <div className='footer-text'>{heartCount}</div>
                </button>
                <button className='post-button'>
                    <img src={shareImage} alt='Share' className='footer-icon'/>
                </button>
                <div className='post-button'>
                    <img src={viewsImage} alt='Views' className='footer-icon'/>
                    <div className='footer-text'>{viewsCount}</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
