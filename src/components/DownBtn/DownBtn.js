import React from "react";
import "./DownBtn.scss";

import Button from '../Button/Button';
import { AiOutlineArrowDown } from 'react-icons/ai';

function DownBtn() {

    return (
        <div className="down-btn">
            <Button>
               <AiOutlineArrowDown></AiOutlineArrowDown>
            </Button>
        </div>
    );
};

export default DownBtn;