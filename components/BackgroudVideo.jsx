import ReactPlayer from "react-player";
import './BackgroundVideo.css'

//We were trying for a videobackground effect since we downloaded the player but its throwing 

const BackgroundVideo = ({videoUrl}) =>{

    return (
        <div className="background-video-container">
          <ReactPlayer
            url={videoUrl}
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            className="background-video"
          />
        </div>
      );

};

export default BackgroundVideo;