import React, { useState, useEffect } from "react";
import Video from "./component/Video";
import db from "./firebase";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  };

  useEffect(() => {
    getVideos();
  }, [videos]);

  return (
    <div className="App">
      <h1>TikTok Clone</h1>
      <h6>From Asif Sorowar</h6>
      <div className="app_videos">
        {videos.map((video) => (
          <Video
            key={video.id}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
