import { bindActionCreators } from "redux";

import ytapiAxios from "@apis/ytapiAxios";

import { store } from "@store/store.js";
import vidListActionCreators from "@store/creators/vidList.creator.js";

const ytApiSearch = (term) => {
    const { setList } = bindActionCreators(vidListActionCreators, store.dispatch);

    ytapiAxios.get('search?q='+term+'&key=AIzaSyBuyI_Ns5sfXsoAMfd_Y3UxgwrXoOdrB8s&maxResults=100&part=snippet&type=video')
        .then(function (response) {
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