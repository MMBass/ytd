import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import "./VidDetails.scss";
import { AiOutlineArrowDown } from 'react-icons/ai';
import getFormats from "services/getFormats.service";
import getFile from "services/getFile.service";
import selectedAction from "@store/creators/selected.creator.js";

function VidDetails(props) {
  const dispatch = useDispatch();
  const { setSelected } = bindActionCreators(selectedAction, dispatch);
  const settings = useSelector((state) => state.settings);

  function handleSubmit(e) {
    e.stopPropagation();
    setSelected(props);

    if (settings.globalFormat) {
      getFile(settings.globalFormat);
    } else {
      getFormats(props);
    }
  }

  return (
    <div className="vid-details">
      <p className="vid-title">{props.title}</p>
      <i className="vid-source">{props.channelTitle}</i>
      <small className="vid-footer" onClick={(e) => handleSubmit(e, props)}> <AiOutlineArrowDown></AiOutlineArrowDown></small>
    </div>
  );
};

export default VidDetails;