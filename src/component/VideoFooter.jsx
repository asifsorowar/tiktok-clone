import React from "react";
import "./videoFooter.css";
import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h4>@{channel}</h4>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <i className="fas fa-music"></i>
          <Ticker mode="smooth" direction="toRight">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <div className="footer_record">
        <i className="fas fa-compact-disc"></i>
      </div>
    </div>
  );
};

export default VideoFooter;
