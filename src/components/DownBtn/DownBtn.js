import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import "./DownBtn.scss";

import Button from '../Button/Button';
import { AiOutlineArrowDown } from 'react-icons/ai';
import getFormats from "services/getFormats.service";
import getFile from "services/getFile.service";
import getListFiles from "@services/getListFiles.service";
import { saveHistory } from "@services/history.service";

import selectedAction from "@store/creators/selected.creator.js";

function DownBtn() {
    const dispatch = useDispatch();
    const { setSelected } = bindActionCreators(selectedAction, dispatch);
    const settings = useSelector((state) => state.settings);
    const video = useSelector((state) => state.video);

    function handleSubmit() {
        setSelected(video);

        if(settings.mode === 'playlist'){
            saveHistory("DOWN_HISTORY",{...video, id: Date.now()});
            getListFiles(video.id);
        }else if (settings.mode === 'music') {
            saveHistory("DOWN_HISTORY",{...video, id: Date.now()});
            getFile('audio');
        }else if (settings.globalFormat) {
            saveHistory("DOWN_HISTORY",{...video, id: Date.now()});
            getFile(settings.globalFormat);
        }else{
            getFormats(video);
        }
    }

    return (
        <div className="down-btn" onClick={() => handleSubmit()}>
            <Button>
                <AiOutlineArrowDown></AiOutlineArrowDown>
            </Button>
        </div>
    );
};

export default DownBtn;