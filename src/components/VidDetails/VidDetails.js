import "./VidDetails.scss";
import { AiOutlineArrowDown } from 'react-icons/ai';
import React from "react";

function VidDetails(props) {
  console.log(props)
  return (
    <div className="vid-details">
      <p className="vid-title">{props.snippet.title}</p>
      <i className="vid-source">{props.snippet.channelTitle}</i>
      <small className="vid-footer"> {props.publishTime } <AiOutlineArrowDown></AiOutlineArrowDown></small>
      {/* {props.views} · */}
      {/* // todo icon onClick={} */}
    </div>
  );
};

export default VidDetails;