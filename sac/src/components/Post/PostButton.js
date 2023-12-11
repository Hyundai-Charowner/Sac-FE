import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/PostButton.css';
import writeIcon from '../../assets/image/write.png';
import userDefaultImage from '../../assets/image/userDefault.png';

function PostButton() {
    const username = null; // 사용자의 이름을 가져오는 로직이 필요합니다.
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/write');
    }

    return (
        <div className='button-container'>
            <img src={userDefaultImage} alt="User Default" className="user-image" />
            <div className="write-container" onClick={handleButtonClick}>
                <img src={writeIcon} alt="Write Icon" className="write-icon" />
                <p className='write-text'>{`${username ? username : 'guest'}님, 무슨 이야기의 싹을 피우실 건가요?`}</p>
            </div>
        </div>
    );
}

export default PostButton;
