import React from 'react';
import userDefaultImage from '../../assets/image/userDefault.png';

const Header = ({ imageUrl, username, timestamp, topic }) => (
    <div className='post-header'>
                <div className='post-info'>
                    <div className='post-user-image'>
                        {imageUrl ? (
                            <img src={imageUrl} alt='User' />
                        ) : (
                            <img src={userDefaultImage} alt='User Default' />
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
