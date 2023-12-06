import React from 'react';
import '../../styles/Post.css';
import userDefaultImage from '../../assets/image/userDefault.png';
import commentImage from '../../assets/image/comment.png';
import heartTrueImage from '../../assets/image/heartTrue.png';
import shareImage from '../../assets/image/share.png';
import viewsImage from '../../assets/image/views.png';

const Post = ({ imageUrl, username, timestamp, topic, title, content, commentCount, heartCount, viewsCount }) => {
    return (
        <div className='post'>
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
                        <div className='post-username'>{username} 님의 게시물</div>
                        <div className='post-content-info'>
                            <p className='post-topic'>#{topic} ㆍ{timestamp}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='post-contents'>
                <h2 className='post-title'>{title}</h2>
                <p className='post-content'>{content}</p>
            </div>

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
        </div>
    );
};

const PostList = () => {
    const postData = [
        {
            imageUrl: '', // 이미지 URL을 저장할 변수 (실제 데이터를 가져와서 사용)
            username: 'John Doe',
            timestamp: '2 hours ago',
            topic: 'React Development',
            title: '인자가 많은 메서드는 왜 나쁠까?',
            content: '주제: 이 기사는 소프트웨어 개발에서 인자가 많은 메서드의 문제점과 이를 개선하는 방법에 대해 설명. \n문제 상황: 예시로, 메일 발송 기능을 수행하는 메서드가 11개의 인자를 가지고 있는 상황을 들고 있음. 이러한 메서드는 사용하기 어렵고, 코드의 이해가 어려움.\n사용자 경험: 메서드의 많은 인자들 중 일부는 이해하기 어렵거나 필요하지 않은 경우가 많아, 개발자가 불필요한 정보에 시간을 낭비하게 됨.\n해결 방안 1: 함께 사용되는 인자들을 하나의 객체로 묶어 복잡성을 줄이는 방법을 제시. 예를 들어, phoneFallback과 phoneNumber는 FallbackFeatureOption 클래스로 묶여 관리.\n해결 방안 2: 관련 없는 기능은 분리하여 메서드를 단순화. 예를 들어, isForceSend와 mailDomainFilterService는 별도의 메서드로 분리.\n최종 결과: 이러한 리팩토링을 통해 메서드의 사용성이 향상되고, 개발자가 메서드를 더 쉽게 이해하고 사용할 수 있게 됨.',
            commentCount: 7,
            heartCount: 8,
            viewsCount: 327
        }, 
        {
            imageUrl: '', // 이미지 URL을 저장할 변수 (실제 데이터를 가져와서 사용)
            username: 'John Doe',
            timestamp: '3 hours ago',
            topic: 'React Development',
            title: '인자가 많은 메서드는 왜 나쁠까?',
            content: '주제: 이 기사는 소프트웨어 개발에서 인자가 많은 메서드의 문제점과 이를 개선하는 방법에 대해 설명. \n문제 상황: 예시로, 메일 발송 기능을 수행하는 메서드가 11개의 인자를 가지고 있는 상황을 들고 있음. 이러한 메서드는 사용하기 어렵고, 코드의 이해가 어려움.\n사용자 경험: 메서드의 많은 인자들 중 일부는 이해하기 어렵거나 필요하지 않은 경우가 많아, 개발자가 불필요한 정보에 시간을 낭비하게 됨.\n해결 방안 1: 함께 사용되는 인자들을 하나의 객체로 묶어 복잡성을 줄이는 방법을 제시. 예를 들어, phoneFallback과 phoneNumber는 FallbackFeatureOption 클래스로 묶여 관리.\n해결 방안 2: 관련 없는 기능은 분리하여 메서드를 단순화. 예를 들어, isForceSend와 mailDomainFilterService는 별도의 메서드로 분리.\n최종 결과: 이러한 리팩토링을 통해 메서드의 사용성이 향상되고, 개발자가 메서드를 더 쉽게 이해하고 사용할 수 있게 됨.',
            commentCount: 27,
            heartCount: 18,
            viewsCount: 3127
        },
        {
            imageUrl: '', // 이미지 URL을 저장할 변수 (실제 데이터를 가져와서 사용)
            username: 'John Doe',
            timestamp: '4 hours ago',
            topic: 'React Development',
            title: '인자가 많은 메서드는 왜 나쁠까?',
            content: '주제: 이 기사는 소프트웨어 개발에서 인자가 많은 메서드의 문제점과 이를 개선하는 방법에 대해 설명. \n문제 상황: 예시로, 메일 발송 기능을 수행하는 메서드가 11개의 인자를 가지고 있는 상황을 들고 있음. 이러한 메서드는 사용하기 어렵고, 코드의 이해가 어려움.\n사용자 경험: 메서드의 많은 인자들 중 일부는 이해하기 어렵거나 필요하지 않은 경우가 많아, 개발자가 불필요한 정보에 시간을 낭비하게 됨.\n해결 방안 1: 함께 사용되는 인자들을 하나의 객체로 묶어 복잡성을 줄이는 방법을 제시. 예를 들어, phoneFallback과 phoneNumber는 FallbackFeatureOption 클래스로 묶여 관리.\n해결 방안 2: 관련 없는 기능은 분리하여 메서드를 단순화. 예를 들어, isForceSend와 mailDomainFilterService는 별도의 메서드로 분리.\n최종 결과: 이러한 리팩토링을 통해 메서드의 사용성이 향상되고, 개발자가 메서드를 더 쉽게 이해하고 사용할 수 있게 됨.',
            commentCount: 17,
            heartCount: 48,
            viewsCount: 3227
        },
        ];

    return (
        <div>
            {postData.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </div>
    );
};

export default PostList;
