import { bindActionCreators } from "redux";

import downAxios from "@apis/downAxios";

import { store } from "@store/store.js";
import formatsActionCreators from "@store/creators/formats.creator.js";
import openModalActionCreators from "@store/creators/openModal.creator.js";

const getFormats = (video) => {
    const { openModal } = bindActionCreators(openModalActionCreators, store.dispatch);
    const { setFormats } = bindActionCreators(formatsActionCreators, store.dispatch);

    // let globalQuality = undefined; // TODO get global Q from setting store;

    // if(!globalQuality){
        // getFile(globalFormat)
    // }
    
    const API_KEY = window.localStorage.getItem("API_KEY");

    downAxios.get('getInfo',{
            params:{
                v_id: video.id.videoId,
                key: API_KEY,
            }
    })
    .then(function (avilableFormats) {
        setFormats(avilableFormats);
        openModal(true);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });
};

export default getFormats;