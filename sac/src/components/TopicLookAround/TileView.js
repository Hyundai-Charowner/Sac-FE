import React, { useState, useEffect } from "react";
import "../../styles/TileView.css";
import axiosInstance from "../../utils/api.js";

const TileView = ({ boards }) => {
  const [subscribed, setSubscribed] = useState([]);

  useEffect(() => {
    // Initialize the subscribed state based on the liked property of boards
    setSubscribed(boards.map((board) => board.liked || false));
    console.log(boards);
  }, [boards]);

  const handleSubscription = async (index) => {
    if (subscribed[index]) {
      // If already subscribed, call unLikeBoard
      await unLikeBoard(index);
    } else {
      // If not subscribed, call likeBoard
      await likeBoard(index);
    }
  };

  const likeBoard = async (index) => {
    try {
      await axiosInstance.post("/user/boards", { board_id: index + 1 });

      setSubscribed((prevSubscribed) => {
        const newSubscribed = [...prevSubscribed];
        newSubscribed[index] = true;
        return newSubscribed;
      });
    } catch (error) {
      console.error("Failed to fetch likeList data:", error);
    }
  };

  const unLikeBoard = async (index) => {
    try {
      await axiosInstance.delete(`/user/boards/${index + 1}`, {
        data: {
          post_id: index + 1,
        },
      });

      setSubscribed((prevSubscribed) => {
        const newSubscribed = [...prevSubscribed];
        newSubscribed[index] = false;
        return newSubscribed;
      });
    } catch (error) {
      console.error("Failed to fetch likeList data:", error);
    }
  };

  return (
    <div className="tile-container">
      {boards.map((board, index) => (
        <div className="tile-view" key={index}>
          <div className="tile-header">
            <div
              className="tile-image"
              style={{ backgroundImage: `url(${board.image})` }}
            />
            <div className="tile-header-container">
              <div className="tile-header-title">{board.title}</div>
              <button
                className={`tile-header-button ${
                  subscribed[index] ? "subscribed" : ""
                }`}
                onClick={() => handleSubscription(index)}
              >
                {subscribed[index] ? "구독 취소" : "관심 등록"}
              </button>
            </div>
          </div>
          <div className="tile-body">
            <span className="tile-body-text">{board.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileView;
