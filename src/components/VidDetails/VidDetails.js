import "./VidDetails.scss";
import { AiOutlineArrowDown } from 'react-icons/ai';
import React from "react";

function VidDetails(props) {
  return (
    <div className="vid-details">
      <p className="vid-title">{props.title}</p>
      <i className="vid-source">{props.source}</i>
      <small className="vid-footer">{props.views} · {props.duration} <AiOutlineArrowDown></AiOutlineArrowDown></small>
      {/* // todo icon onClick={} */}
    </div>
  );
};

export default VidDetails;