import React from "react";
import Post from "../Post/Post";
import '../../styles/MyPageBody.css';
import axiosInstance from "../../utils/api.js";

function MyLikePost() {

    const [posts, setPosts] = React.useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axiosInstance.get("posts/like/list");
            const posts = response.data;
            setPosts(posts.posts);
        } catch (error) {
            console.error("Failed to fetch posts data:", error);
        }
    }

    React.useEffect(() => {
        fetchPosts();
    }, []);


    return (
        <div className="my-body-post">
              {posts.map((post) => (
                post.isLike = 1,
                <Post post={post}/>
             ))}
        </div>
    );
}

export default MyLikePost;