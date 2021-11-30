import React from "react";
import { useDispatch } from "react-redux";
import{ bindActionCreators} from "redux";

import "./VidDetails.scss";
import { AiOutlineArrowDown } from 'react-icons/ai';
import getFormats from "services/getFormats.service";
import selectedAction from "@store/creators/selected.creator.js";

function VidDetails(props) {
  const dispatch = useDispatch();
  const { setSelected } = bindActionCreators(selectedAction, dispatch);

  function handleSubmit(){
      setSelected(props);
      getFormats(props);
  }

  props.snippet.title = (props.snippet.title.length > 65) ? props.snippet.title.substr(0, 65-1) + '...' : props.snippet.title; // cut the title if too long

  return (
    <div className="vid-details">
      <p className="vid-title">{props.snippet.title}</p>
      <i className="vid-source">{props.snippet.channelTitle}</i>
      <small className="vid-footer" onClick={()=> handleSubmit(props)}> {props.publishTime } <AiOutlineArrowDown></AiOutlineArrowDown></small>
    </div>
  );
};

export default VidDetails;