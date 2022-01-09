import { bindActionCreators } from "redux";

import { store } from "@store/store.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

const getFile = (format) => {
    const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);
    const state = store.getState();

    if( state.settings.mode === 'playlist'){
        return;
    }else{
        const accessToken = window.sessionStorage.getItem("ACCESS_TOKEN");
    
        openLoader(true);
    
        // window.location.href = `http://localhost:5000/download?v_id=${state.selected.id}&format=${format}&accessToken=${accessToken}`;
        window.location.href = `https://bass-ytd.herokuapp.com/download?v_id=${state.selected.id}&format=${format}&accessToken=${accessToken}`;
    
        setTimeout(() => {
            openLoader(false);
        }, 3000);
    }
};

export default getFile;