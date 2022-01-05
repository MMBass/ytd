import { bindActionCreators } from "redux";

import serverAxios from "@apis/serverAxios";

import { store } from "@store/store.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

const getFile = (format) => {
    const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);
    const state = store.getState();
    const accessToken = window.localStorage.getItem("ACCESS_TOKEN");

    openLoader(true);

    // if(state.settings.mode !== 'music'){
        // window.location.href = `http://localhost:5000/download?v_id=${state.selected.id}&format=${format}&accessToken=${accessToken}`;
    // }
       
    fetch(`https://bass-ytd.herokuapp.com/download?v_id=${state.selected.id}&format=${format}&accessToken=${accessToken}`)
    // .then(response => response.json())
    // .then(data => console.log(data));

    openLoader(false);

    // serverAxios.get('download',{
    //         params:{
    //             type: 'list',
    //             v_id: state.selected.id,
    //             format: 'audio',
    //             accessToken: accessToken,
    //         }
    // })
    // .then(function () {
    //     openLoader(false);
    //     // getFile('audio');
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