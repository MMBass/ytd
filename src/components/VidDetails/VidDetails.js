import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromHistory } from "@services/history.service";

import "./VidDetails.scss";
import { AiOutlineArrowDown, AiTwotoneDelete } from 'react-icons/ai';
import getFormats from "services/getFormats.service";
import getFile from "services/getFile.service";
import getListFiles from "@services/getListFiles.service";
import { saveHistory } from "@services/history.service";
import selectedAction from "@store/creators/selected.creator.js";

function VidDetails(props) {
  const dispatch = useDispatch();
  const { setSelected } = bindActionCreators(selectedAction, dispatch);
  const settings = useSelector((state) => state.settings);

  function handleSubmit(e) {
    e.stopPropagation();
    
    if(props.history){
      removeFromHistory(props.history, props.id);
      props.setDeleted(true);
    }else{
      setSelected(props);
    
      if(settings.mode === 'playlist'){
        saveHistory("DOWN_HISTORY",{...props, id: Date.now()});
        getListFiles(props.id);
      }else if (settings.mode === 'music') {
        saveHistory("DOWN_HISTORY",{...props, id: Date.now()});
        getFile('audio');
      }else if (settings.globalFormat) {
        saveHistory("DOWN_HISTORY",{...props, id: Date.now()});
        getFile(settings.globalFormat);
      }else{
          getFormats(props);
      }
    }
}

  return (
    <div className="vid-details">
      <p className="vid-title">{props.title}</p>
      <i className="vid-source">{props.channelName}</i>
      <small className="vid-footer" onClick={(e) => handleSubmit(e, props)}> 
       {props.history ?
          <AiTwotoneDelete></AiTwotoneDelete>
          :
          <AiOutlineArrowDown></AiOutlineArrowDown>
      }
      </small>
    </div>
  );
};

export default VidDetails;