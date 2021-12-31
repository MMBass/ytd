import { bindActionCreators } from "redux";

import serverAxios from "@apis/serverAxios";

import { store } from "@store/store.js";
import formatsActionCreators from "@store/creators/formats.creator.js";
import openModalActionCreators from "@store/creators/openModal.creator.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

const getFormats = (video) => {
    const { openModal } = bindActionCreators(openModalActionCreators, store.dispatch);
    const { setFormats } = bindActionCreators(formatsActionCreators, store.dispatch);
    const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);

    openLoader(true);

    serverAxios.get('info',{
            headers:{
                'x-access-token': window.localStorage.getItem("ACCESS_TOKEN"),
            },
            params:{
                v_id: video.id,
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