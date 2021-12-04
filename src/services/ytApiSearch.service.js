import { bindActionCreators } from "redux";

import ytapiAxios from "@apis/ytapiAxios";
import downAxios from "@apis/downAxios";

import { store } from "@store/store.js";
import vidListActionCreators from "@store/creators/vidList.creator.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

let count = 0;

const { resetList, setList } = bindActionCreators(vidListActionCreators, store.dispatch);
const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);

const ytApiSearch = (term, pt) => {
   
    const API_KEY = window.localStorage.getItem("API_KEY");

    openLoader(true);

    if(count === 0){
        resetList(true);
    }

    ytapiAxios.get('search',{
        
            params:{
                q:term,
                key: API_KEY,
                maxResults: '500',
                part: 'snippet',
                type: 'video',
                pageToken: pt,
            }
    })
    .then(function (response) {
        setList(response.data.items);

        if(count <= 5){
            count++;
            ytApiSearch(term, response.data.nextPageToken);
        }
      
        openLoader(false);
    })
    .catch(function (error) {
        console.log(error);
        startYtsr(term);
        // openLoader(false);
    })
    .then(function () {
        // always executed
    });
};

async function startYtsr(term){
    openLoader(true);
    downAxios.get('ytsr',{
        params:{
            term:term,
        }
})
.then(function(response) {
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
} // todo try to pass to node side;

export default ytApiSearch;