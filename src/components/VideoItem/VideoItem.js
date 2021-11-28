import "./VideoItem.scss";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import videoActionCreators from "@store/creators/video.creator.js";
import playerActionCreators from "@store/creators/player.creator.js";

import ExampleParagraph from '../ExampleParagraph/ExampleParagraph';
import VidDetails from '../VidDetails/VidDetails';

function VideoItem(props) {
  const dispatch = useDispatch();
  const { setVideo } = bindActionCreators(videoActionCreators, dispatch);
  const { openPlayer } = bindActionCreators(playerActionCreators, dispatch);

  const handleSetVideo = ()=>{
    setVideo(props);
    openPlayer(true);
  }

  return (
    <div className="vid-item" onClick={()=> handleSetVideo() }>

      <img className="vid-thumb" src={props.id ? props.snippet.thumbnails.default.url : null} alt={props.id ? "video thumbnail" : null} />

      {props.id
        ?
        <VidDetails {...props}></VidDetails>
        :
        <ExampleParagraph ></ExampleParagraph>
      }
    </div>
  );
};

export default VideoItem;