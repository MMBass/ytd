import io from "socket.io-client";
import { bindActionCreators } from "redux";

import ytapiAxios from "@apis/ytapiAxios";
import { store } from "@store/store.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";
import progressListActionCreators from "@store/creators/progressList.creator.js";

const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);
const progressList = bindActionCreators(progressListActionCreators, store.dispatch);

// const ENDPOINT = 'http://localhost:5000/download';
const ENDPOINT = 'https://bass-ytd.herokuapp.com/download';

const getListFiles = async (list_id) => {
    window.onbeforeunload = function() { return 'are you sure?'; };
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
                    title: item.snippet.title.substr(0, 31),
                }
            });
            progressList.setProgressList(items.length);

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
    const accessToken = window.sessionStorage.getItem("ACCESS_TOKEN");
    // let socket = io('http://localhost:5000/');
    let socket = io('https://bass-ytd.herokuapp.com/');
    let popUp;

    socket.on("listContinue", () => {
        progressList.updateProgressList(true);
        if (popUp){
            popUp.close();
            popUp = undefined;
        }
        setTimeout(() => {
            popUp = window.open(ENDPOINT + `?type=list&v_id=${items[0].id}&format=${format}&accessToken=${accessToken}&index=${items.length == 1 && 'last'}&title=${items[0].title}`, '_blank');
            items.shift();
        }, 1500);
    });

    socket.on("listFinish", data => {
        progressList.resetProgressList(true);
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
        window.onbeforeunload = function() { return; };;
        socket.disconnect();
        socket = undefined;
    }
    
}

export default getListFiles;