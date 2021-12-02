import { bindActionCreators } from "redux";

import ytapiAxios from "@apis/ytapiAxios";

import { store } from "@store/store.js";
import vidListActionCreators from "@store/creators/vidList.creator.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

const ytApiSearch = (term) => {
    const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);
    const { resetList, setList } = bindActionCreators(vidListActionCreators, store.dispatch);
    const API_KEY = window.localStorage.getItem("API_KEY");
    
    let count = 0;

    openLoader(true);
    resetList(true);

    ytapiAxios.get('search',{
        
            params:{
                q:term,
                key: API_KEY,
                maxResults: '100',
                part: 'snippet',
                type: 'video',
            }
    })
    .then(function (response) {
        setList(response.data.items);

        if(count <= 5){
            console.log(count, response.nextPageToken);
            count++;
            // ytApiSearch(term+"&pageToken="+response.nextPageToken);
        }
      
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

export default ytApiSearch;