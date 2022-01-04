import { bindActionCreators } from "redux";

import serverAxios from "@apis/serverAxios";

import { store } from "@store/store.js";
import playlistListActionCreators from "@store/creators/playlistList.creator.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";
import playerActionCreators from "@store/creators/player.creator.js";

const { resetList, setList } = bindActionCreators(playlistListActionCreators, store.dispatch);
const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);
const { openPlayer } = bindActionCreators(playerActionCreators, store.dispatch);

const state = store.getState();
const mode = state.settings.mode;

const ytListSearch = (term) => {

    openLoader(true);
    openPlayer(false);

    serverAxios.get('ytsr', {
        headers: {
            'x-access-token': window.localStorage.getItem("ACCESS_TOKEN"),
        },
        params: {
            term: term,
            type: mode,
        }
    })
    .then(function (response) {
        resetList(true);
        setList(response.data);
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

export default ytListSearch;