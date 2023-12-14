import Header from './PostHeader';
import Body from './PostBody';
import '../../styles/Post.css';
import PostReply from './PostReply';
import ReplyEdit from './ReplyEdit';
import axiosInstance from "../../utils/api.js";
import { useEffect, useState } from 'react';

const PostDetail = ({ postId }) => {

    const [post, setPost] = useState(null);
    const [reply, setReply] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosInstance.get(`/posts/${postId}`);
                setPost(response.data.post);
                setReply(response.data.reply);
            } catch (error) {
                console.error('데이터 가져오기 실패:', error);
            }
        };

        fetchPost();

    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const { imageUrl, username} = post;

    return (
        <div className='post-detail'>
            <Header imageUrl={imageUrl} username={username} timestamp={post.created_date} topic={post.board_id} />
            <Body title={post.post_head} content={post.post_content} />
            <div className='divider-detail' />
            <PostReply />
            <ReplyEdit postId={post.post_id}/>
        </div>
    );
};

export default PostDetail;
