import { bindActionCreators } from "redux";

import downAxios from "@apis/downAxios";
import getFile from "./getFile.service";

import { store } from "@store/store.js";
import formatsActionCreators from "@store/creators/formats.creator.js";
import openModalActionCreators from "@store/creators/openModal.creator.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

const getFormats = (video) => {
    const { openModal } = bindActionCreators(openModalActionCreators, store.dispatch);
    const { setFormats } = bindActionCreators(formatsActionCreators, store.dispatch);
    const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);
    openLoader(true);

    // if(store.settings.globalFormat){
    //     getFile(store.settings.globalFormat);
    // }
    
    const API_KEY = window.localStorage.getItem("API_KEY");

    downAxios.get('getInfo',{
            params:{
                v_id: video.id.videoId,
                key: API_KEY,
            }
    })
    .then(function (avilableFormats) {
        setFormats(avilableFormats.data);

        openModal(true);
        openLoader(false);
    })
    .catch(function (error) {
        console.log(error);
        openLoader(false);
    })
    .then(function () {
        // always executed
        openLoader(false);
    });
};

export default getFormats;