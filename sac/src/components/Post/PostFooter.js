import React, { useState, useEffect } from 'react';
import commentImage from '../../assets/image/comment.png';
import heartTrueImage from '../../assets/image/heartTrue.png';
import heartFalseImage from '../../assets/image/heartFalse.png';
import shareImage from '../../assets/image/share.png';
import viewsImage from '../../assets/image/views.png';
import '../../styles/Post.css';
import axiosInstance from "../../utils/api.js";

const Footer = ({ commentCount, initialHeartCount, viewsCount, postId, isLiked }) => {
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [heartCount, setHeartCount] = useState(initialHeartCount);

    useEffect(() => {
        setIsHeartClicked(isLiked === 1);
    }, [isLiked]);

    const likePost = async (postId) => {
        try {
            await axiosInstance.post(`/posts/like`, {
                post_id: postId
            });
            setHeartCount(prevHeartCount => prevHeartCount + 1);
        } catch (error) {
            console.error("Failed to fetch like data:", error);
        }
    }

    const unLikePost = async (postId) => {
        try {
            await axiosInstance.delete(`/posts/like`, {
                data: {
                    post_id: postId
                }
            });
            setHeartCount(prevHeartCount => prevHeartCount - 1);
        } catch (error) {
            console.error("Failed to fetch like data:", error);
        }
    };

    const handleHeartClick = () => {
        if (isHeartClicked) {
            unLikePost(postId);
        } else {
            likePost(postId);
        }
        setIsHeartClicked(!isHeartClicked);
    };

    return (
        <div className='post-footer'>
            <div className='post-footer-buttons'>
                <div className='post-button'>
                    <img src={commentImage} alt='Comment' className='footer-icon'/>
                    <div className='post-footer-text'>{commentCount}</div>
                </div>
                <button className='post-button' onClick={handleHeartClick}>
                    <img src={isHeartClicked ? heartTrueImage : heartFalseImage} alt='Heart' className='footer-icon'/>
                    <div className='post-footer-text'>{heartCount}</div>
                </button>
                <button className='post-button'>
                    <img src={shareImage} alt='Share' className='footer-icon'/>
                </button>
                <div className='post-button'>
                    <img src={viewsImage} alt='Views' className='footer-icon'/>
                    <div className='post-footer-text'>{viewsCount}</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
