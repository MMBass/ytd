import "./VidDetails.scss";
import { AiOutlineArrowDown } from 'react-icons/ai';
import React from "react";
import getFormats from "services/getFormats.service";

function VidDetails(props) {
  return (
    <div className="vid-details">
      <p className="vid-title">{props.snippet.title}</p>
      <i className="vid-source">{props.snippet.channelTitle}</i>
      <small className="vid-footer" onClick={()=> getFormats(props)}> {props.publishTime } <AiOutlineArrowDown></AiOutlineArrowDown></small>
    </div>
  );
};

export default VidDetails;