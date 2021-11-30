import "./Modal.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import{ bindActionCreators} from "redux";

import openModalActionCreators from "@store/creators/openModal.creator.js";
import getFile from "services/getFile.service";

function Modal(props) {
  const [format, setFormat] = useState('');
  const formats = useSelector(state => state.formats);
  const dispatch = useDispatch();
  const { openModal } = bindActionCreators(openModalActionCreators, dispatch);

  return (
        <div className="modalcontainer">
            <div className="modal">
              <div className="close" onClick={()=>openModal(false)}><span >&#43;</span></div>
              <div className="content">
                <h2>Select Format</h2>
                {formats.map((i)=>{
                    return( 
                      <>
                        <label htmlFor={i}>{i}</label>
                        <input type="radio" id={i} name="format" value={i}/>
                      </>)
                })}
              </div>
              <div className="buttons">
                <span onClick={()=>openModal(false)}>Cancel</span>
                <span onClick={()=>getFile(format)}>Download</span>
              </div>
            </div>
          </div>

  );
}

export default Modal;
