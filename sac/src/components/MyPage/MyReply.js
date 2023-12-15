import React from "react";
import Reply from "../commons/Reply";
import '../../styles/MyPageBody.css';
import axiosInstance from "../../utils/api.js";

function MyReply() {
    
    const [Replys, setReplys] = React.useState([]);

    const fetchReply = async () => {
        try {
            const response = await axiosInstance.get("/users/replies");
            const Replys = response.data;
            setReplys(Replys.replies);
            console.log("Replys:", Replys);
        } catch (error) {
            console.error("Failed to fetch posts data:", error);
        }
    }

    React.useEffect(() => {
        fetchReply();
    }, []);


    return (
        <div className="my-body-post">
            {Replys.map((reply) => (
                <div className="my-reply-content">
                    <Reply reply={reply}/>
                    <div className="my-reply-title">
                        <div className="my-reply-title-text">{reply.board_title} </div>
                        <div className="my-reply-title-explain">에 남긴 댓글</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyReply;