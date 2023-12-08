import React from 'react';
import commentImage from '../../assets/image/comment.png';
import heartTrueImage from '../../assets/image/heartTrue.png';
import shareImage from '../../assets/image/share.png';
import viewsImage from '../../assets/image/views.png';

const Footer = ({ commentCount, heartCount, viewsCount }) => (
    <div className='post-footer'>
                <div className='post-footer-buttons'>
                    <button className='post-comment-button'>
                        <img src={commentImage} alt='Comment' className='footer-icon'/>
                        <div className='footer-text'>{commentCount}</div>
                    </button>
                    <button className='post-comment-button'>
                        <img src={heartTrueImage} alt='Heart' className='footer-icon'/>
                        <div className='footer-text'>{heartCount}</div>
                    </button>
                    <button className='post-comment-button'>
                        <img src={shareImage} alt='Share' className='footer-icon'/>
                    </button>
                    <button className='post-comment-button'>
                        <img src={viewsImage} alt='Views' className='footer-icon'/>
                        <div className='footer-text'>{viewsCount}</div>
                    </button>
                </div>
            </div>
);

export default Footer;
