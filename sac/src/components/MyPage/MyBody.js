import React, { useState } from "react";
import '../../styles/MyPageBody.css';
import MyPost from "./MyPost";
import MyReply from "./MyReply";
import MyLikePost from "./MyLikePost";

function MyBody() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="my-body-main">
            <div className="my-body-menu">
                <div className="my-tabs">
                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? "active" : ""}>
                        내 포스트
                    </button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? "active" : ""}>
                        내 댓글 
                    </button>
                    <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? "active" : ""}>
                        찜한 포스트
                    </button>
                </div>
                <div className="my-tabs-line"></div>
            </div>
            
            <div className="tab-content">
                {activeTab === 1 && <MyPost />}
                {activeTab === 2 && <MyReply />}
                {activeTab === 3 && <MyLikePost />}
            </div>
        </div>
    );
}

export default MyBody;
