import "./VideoItem.scss";

import{ useDispatch} from "react-redux";
import{ bindActionCreators} from "redux";
import videoActionCreators from "@store/creators/video.creator.js";

import ExampleParagraph from '../ExampleParagraph/ExampleParagraph';
import VidDetails from '../VidDetails/VidDetails';

function VideoItem(props) {
  const dispatch = useDispatch();
  const {setVideo} = bindActionCreators(videoActionCreators, dispatch);

  return (
    <div className="vid-item" onClick={()=>setVideo(props.id)}>

      <img className="vid-thumb" src={props.title ?  props.img : null} alt={props.title ? "video thumbnail" : null}/>

      {props.title
        ?
        <VidDetails {...props}></VidDetails>
        :
        <ExampleParagraph ></ExampleParagraph>
      }
      
    </div>
  );
};

export default VideoItem;