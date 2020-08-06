import React, { useState } from "react";
import "./videoSidebar.css";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    liked ? setLiked(false) : setLiked(true);
  };

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <i className="fas fa-heart" onClick={handleLike}></i>
        ) : (
          <i className="far fa-heart" onClick={handleLike}></i>
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <i className="fas fa-comment-alt"></i>
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <i className="fas fa-share-alt"></i>
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
