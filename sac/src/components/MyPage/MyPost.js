import React, { useState } from "react";
import Post from "../Post/Post";
import '../../styles/MyPageBody.css';
import axiosInstance from "../../utils/api.js";

function MyPost() {

    const [posts, setPosts] = useState([]);

    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosInstance.get("posts/list");
                const posts = response.data;
                setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
                console.log("posts:", posts);
            } catch (error) {
                console.error("Failed to fetch posts data:", error);
            }
        };

        fetchPosts();
    }
    , []);

    return (
        <div className="my-body-post">
           {/* {posts.map((post) => (
            <Post key={post.post_id} />
          ))} */}
        </div>
    );
}

export default MyPost;