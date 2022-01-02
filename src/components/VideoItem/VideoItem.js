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

  const handleSetVideo = () => {
    setVideo(props);
    openPlayer(true);
  }

  return (
      <div className="vid-item" onClick={() => handleSetVideo()}>

        {props.id
          ?
          <>
            {props.length && <div className="list-length"><p>{props.length}</p></div>}
            <img className="vid-thumb" src={props.thumbnail} alt={props.id}/>
          </>
     
          :
          // eslint-disable-next-line jsx-a11y/alt-text
          <img className="vid-thumb" src="" alt={null} />
        }

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