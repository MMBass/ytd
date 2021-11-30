import { bindActionCreators } from "redux";

import downAxios from "@apis/downAxios";

import { store } from "@store/store.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

const getFile = (format) => {
    const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);

    openLoader(true);
    const API_KEY = window.localStorage.getItem("API_KEY");

    downAxios.get('download',{
            params:{
                v_id: store.selected.id.videoId,
                format: format,
                key: API_KEY,
            }
    })
    .then(function () {
        //TODO create service for ls's with arrays. that checks if exist, 
        // if not creates new 'down_history', and pushing to array.
        openLoader(false);
    })
    .catch(function (error) {
        console.log(error);
        openLoader(false);
    })
    .then(function () {
        // always executed
    });
};

export default getFile;