import "./Modal.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import{ bindActionCreators} from "redux";

import openModalActionCreators from "@store/creators/openModal.creator.js";
import getFile from "services/getFile.service";
import Flex from "components/Flex/Flex";

function Modal(props) {
  const [format, setFormat] = useState('');
  const formats = useSelector(state => state.formats);
  const dispatch = useDispatch();
  const { openModal } = bindActionCreators(openModalActionCreators, dispatch);

  function handleChange(code){
    setFormat(code);
  }

  function handleSubmit(){
    getFile(format);
    openModal(false);
  }

  return (
        <div className="modalcontainer">
            <div className="modal">
              <div className="close" onClick={()=>openModal(false)}><span >&#43;</span></div>
              <div className="content">
                <h2>Select Format</h2>
                <Flex>
                  {formats.map((i)=>{
                      return( 
                        <div className="format-item-wrapper">
                          <label htmlFor={i.quality}>{i.format} - {i.quality}</label>
                          <input type="radio" id={i.quality} name="format" value={i.code} onChange={()=>handleChange(i.code)}/>
                        </div>)
                  })}
                </Flex>
              </div>
              <div className="buttons">
                <span onClick={()=>openModal(false)}>Cancel</span>
                <span onClick={()=>handleSubmit()}>Download</span>
              </div>
            </div>
          </div>

  );
}

export default Modal;
