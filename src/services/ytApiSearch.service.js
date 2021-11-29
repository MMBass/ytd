import { bindActionCreators } from "redux";

import ytapiAxios from "@apis/ytapiAxios";

import { store } from "@store/store.js";
import vidListActionCreators from "@store/creators/vidList.creator.js";

const ytApiSearch = (term) => {
    const { setList } = bindActionCreators(vidListActionCreators, store.dispatch);
    const API_KEY = window.localStorage.getItem("API_KEY");

    ytapiAxios.get('search?q='+term+'&key='+API_KEY+'&maxResults=100&part=snippet&type=video')
        .then(function (response) {
            console.log(response.data)
            setList(response.data.items);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
};

export default ytApiSearch;