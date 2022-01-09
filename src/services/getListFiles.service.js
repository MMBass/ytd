import io from "socket.io-client";
import { bindActionCreators } from "redux";

import ytapiAxios from "@apis/ytapiAxios";
import { store } from "@store/store.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);
// const { openProgress } = bindActionCreators(openLoaderActionCreators, store.dispatch);
const accessToken = window.sessionStorage.getItem("ACCESS_TOKEN");

// const ENDPOINT = 'http://localhost:5000/download';
const ENDPOINT = 'https://bass-ytd.herokuapp.com/download';

const getListFiles = async (list_id) => {
    const API_KEY = window.localStorage.getItem("API_KEY");
    // get the playlist id's from google - then start the socket:
    try{
        ytapiAxios.get('playlistItems', {
            params: {
                key: API_KEY,
                playlistId: list_id,
                part: 'snippet',
                maxResults: 50,
            }
        }).then(function (response) {
            const items = [];
            response.data.items.forEach((item, index) => {
                items[index] = {
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                }
            });
            startSocket('audio', items);
        }).catch(function (error) {
            if (error.response.status == 400) {
                window.localStorage.removeItem("API_KEY");
            }
        }).then(function () {
            // always executed
        });
    }catch{
        console.error('get playlist items error');
    }
};

function startSocket(format, items){

    // let socket = io('http://localhost:5000/');
    let socket = io('https://bass-ytd.herokuapp.com/');
    let popUp;

    const beforeUnload = () => { return 'are you sure' };
    window.addEventListener('beforeunload', beforeUnload);

    socket.on("listContinue", () => {
        if (popUp){
            popUp.close();
            popUp = undefined;
        }
        items.shift();
        popUp = window.open(ENDPOINT + `?type=list&v_id=${items[0].id}&format=${format}&accessToken=${accessToken}`, '_blank');
    });

    socket.on("listFinish", data => {
        endConnection();
    });

    socket.on("listError", err => {
        console.log(err);
        endConnection();
    });

    function endConnection(){
        if (popUp){
            popUp.close();
            popUp = undefined;
        }
        openLoader(false);
        window.removeEventListener('beforeunload', beforeUnload, true);
        socket.disconnect();
        socket = undefined;
    }
    
}



export default getListFiles;