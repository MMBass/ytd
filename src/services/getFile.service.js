import { bindActionCreators } from "redux";

import downAxios from "@apis/downAxios";

import { store } from "@store/store.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

const getFile = (format) => {
    const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);
    const state = store.getState();
    const API_KEY = window.localStorage.getItem("API_KEY");

    openLoader(true);

    window.location.href = `https://bass-ytd.herokuapp.com/download?v_id=${state.selected.id}&format=${format}`;
    // window.location.href = `http://localhost:5000/download?v_id=${state.selected.id}&format=${format}`;

    openLoader(false);

    // downAxios.get('download',{
    //         params:{
    //             v_id: state.selected.id,
    //             format: format,
    //             key: API_KEY,
    //         }
    // })
    // .then(function () {
    //     //TODO create service for ls's with arrays. that checks if exist, 
    //     // if not creates new 'down_history', and pushing to array.
    //     openLoader(false);
    // })
    // .catch(function (error) {
    //     console.log(error);
    //     openLoader(false);
    // })
    // .then(function () {
    //     // always executed
    //     openLoader(false);
    // });
};

export default getFile;