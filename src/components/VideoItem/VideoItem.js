import "./VideoItem.scss";

import ExampleParagraph from '../ExampleParagraph/ExampleParagraph';
import VidDetails from '../VidDetails/VidDetails';

function VideoItem(props) {

  return (
    <div className="vid-item">

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