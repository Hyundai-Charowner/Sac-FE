import React from 'react';
import userDefaultImage from '../../assets/image/userDefault.png';
import '../../styles/Post.css';

const Header = ({ imageUrl, username, timestamp, topic }) => (
    <div className='post-header'>
                <div className='post-info'>
                    <div className='post-user-image'>
                        {imageUrl ? (
                            <img src={imageUrl} alt='user' style={{ borderRadius: '50%' }} />
                        ) : (
                            <img src={userDefaultImage} alt='User Default' style={{ borderRadius: '50%' }} />
                        )}
                    </div>

                    <div className='post-info-body'>
                        <div className='post-username'>{username} <div className='gray-text'>님의</div> <div className='green-text'>게시물</div></div>
                        <div className='post-content-info'>
                            <p className='post-topic'>#{topic} ㆍ{timestamp}</p>
                        </div>
                    </div>
                </div>
            </div>
);

export default Header;
