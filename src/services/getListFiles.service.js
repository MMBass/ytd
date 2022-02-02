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
    openLoader(true);
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

            startSocket('audio', items);
          
        }).catch(function (error) {
            if (error.response.status == 400) {
                window.localStorage.removeItem("API_KEY");
            }
        }).then(function () {
            // always executed
            openLoader(false);
        });
    }catch{
        console.error('get playlist items error');
    }
};

function startSocket(format, items){
    progressList.setProgressList(items.length);
    const accessToken = window.sessionStorage.getItem("ACCESS_TOKEN");
    // let socket = io('http://localhost:5000/');
    let socket = io('https://bass-ytd.herokuapp.com/');
    let popUp;


    socket.on("listContinue", () => {

        // open end close a new tab each file. works but not user friendly
        // popUp = window.open(ENDPOINT + `?type=list&v_id=${items[0].id}&format=${format}&accessToken=${accessToken}&index=${items.length == 1 && 'last'}&title=${items[0].title}`, '_blank');
 
        // disconnect the socket (but js keep running)
        // window.location.href = ENDPOINT + `?type=list&v_id=${items[0].id}&format=${format}&accessToken=${accessToken}&index=${items.length == 1 && 'last'}&title=${items[0].title}`;
        
        if(items.length > 0){
            
            let item = items.shift();

            progressList.updateProgressList(ENDPOINT + `?type=list&v_id=${item.id}&format=${format}&accessToken=${accessToken}&index=${items.length === 0 && 'last'}&title=${item.title}`);
        }
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
        window.onbeforeunload = function() { return; };
        socket.disconnect();
        socket = undefined;
    }
    
}

export default getListFiles;