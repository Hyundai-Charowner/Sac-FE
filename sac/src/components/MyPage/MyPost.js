import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import '../../styles/MyPageBody.css';
import axiosInstance from "../../utils/api.js";

function MyPost() {
    const [posts, setPosts] = useState([]);

    const deletePost = async (postId) => {
        try {
            await axiosInstance.delete(`/posts`, {
                data: {
                    post_id: postId
                }
            });
            // Update the posts state after deleting the post
            setPosts(prevPosts => prevPosts.filter(post => post.post_id !== postId));
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosInstance.get("posts/list");
                const fetchedPosts = response.data.posts;
                setPosts(fetchedPosts);
                console.log("posts:", fetchedPosts);
            } catch (error) {
                console.error("Failed to fetch posts data:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="my-body-post">
            {posts.map((post) => (
                <div className="my-post-button" key={post.post_id}>
                    <Post post={post} />
                    <button className="my-post-button-delete" onClick={() => deletePost(post.post_id)}>글 삭제</button>
                </div>
            ))}
        </div>
    );
}

export default MyPost;
