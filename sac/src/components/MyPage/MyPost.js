import React from "react";
import Post from "../Post/Post";
import '../../styles/MyPageBody.css';

function MyPost() {
    return (
        <div className="my-body-post">
            <div className="my-post-content">
                <Post />
            </div>
            <div className="my-post-content">
                <Post />
            </div>
        </div>
    );
}

export default MyPost;