import React from "react";
import {useSelector} from "react-redux";
import "./DownBtn.scss";

import Button from '../Button/Button';
import { AiOutlineArrowDown } from 'react-icons/ai';
import getFormats from "services/getFormats.service";

function DownBtn(props) {
    const video = useSelector((state) => state.video);

    return (
        <div className="down-btn" onClick={()=> getFormats(video)}>
            <Button>
               <AiOutlineArrowDown></AiOutlineArrowDown>
            </Button>
        </div>
    );
};

export default DownBtn;