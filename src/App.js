import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Video from "./component/Video";

function App() {
  return (
    <div className="App">
      <h1>TikTok Clone</h1>
      <h6>From Asif Sorowar</h6>
      <div className="app_videos">
        <Video
          url="https://v16m.tiktokcdn.com/8abb337811d52a8c080e6656155086fe/5f2c50ea/video/tos/useast2a/tos-useast2a-ve-0068c004/39f2e9c6ec8d4a21bc57da9f2141040e/?a=1233&amp;br=2260&amp;bt=1130&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=202008041850180101890710664B3798E5&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=M3loPG1pdGZudTMzNjczM0ApaDRoMzpoZWVoN2g0N2Y0NGdlYnJpaGViYy9fLS0wMTZzc2A1MWEzM2I0MzAyLi0yYmE6Yw%3D%3D&amp;vl=&amp;vr="
          channel="asif_sorowar"
          description="Yoo rock!"
          song="ami to vala na"
          likes={10}
          messages={15}
          shares={5}
        />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
