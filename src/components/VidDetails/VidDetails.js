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

  function handleSubmit(e){
      e.stopPropagation();
      setSelected(props);
      getFormats(props);
  }

  let title = props.title || props.snippet.title;
  let channelTitle = 'channel title';
  
  if(props.snippet){
    channelTitle = props.snippet.channelTitle;
  } 

  title = (title.length > 65) ? title.substr(0, 65-1) + '...' : title; // cut the title if too long
  
  return (
    <div className="vid-details">
      <p className="vid-title">{title}</p>
      <i className="vid-source">{channelTitle}</i>
      <small className="vid-footer" onClick={(e)=> handleSubmit(e,props)}> {props.publishTime } <AiOutlineArrowDown></AiOutlineArrowDown></small>
    </div>
  );
};

export default VidDetails;