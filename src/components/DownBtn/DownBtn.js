import React from "react";
import {useSelector, useDispatch} from "react-redux";
import{ bindActionCreators} from "redux";

import "./DownBtn.scss";

import Button from '../Button/Button';
import { AiOutlineArrowDown } from 'react-icons/ai';
import getFormats from "services/getFormats.service";

import selectedAction from "@store/creators/selected.creator.js";

function DownBtn(props) {
    const dispatch = useDispatch();
    const { setSelected } = bindActionCreators(selectedAction, dispatch);
    const video = useSelector((state) => state.video);

    function handleSubmit(){
        setSelected(video);
        getFormats(video);
    }

    return (
        <div className="down-btn" onClick={()=> handleSubmit()}>
            <Button>
               <AiOutlineArrowDown></AiOutlineArrowDown>
            </Button>
        </div>
    );
};

export default DownBtn;