import { bindActionCreators } from "redux";

import ytapiAxios from "@apis/ytapiAxios";
import downAxios from "@apis/downAxios";

import { store } from "@store/store.js";
import vidListActionCreators from "@store/creators/vidList.creator.js";
import openLoaderActionCreators from "@store/creators/loaderLine.creator.js";

let count = 0;

const { resetList, setList } = bindActionCreators(vidListActionCreators, store.dispatch);
const { openLoader } = bindActionCreators(openLoaderActionCreators, store.dispatch);
const state = store.getState();
const mode = state.settings.mode;

const ytApiSearch = (term, pt) => {

    const API_KEY = window.localStorage.getItem("API_KEY");

    openLoader(true);

    if (count === 0) {
        resetList(true);
    }

    ytapiAxios.get('search', {

        params: {
            q: term,
            key: API_KEY,
            maxResults: '500',
            part: 'snippet',
            type: mode,
            pageToken: pt,
            // videoCategoryId: 10, // Music category, results as video
        }
    })
        .then(function (response) {
            const items = [];
            response.data.items.forEach((item, index) => {
                items[index] = {
                    id: item.id.videoId,
                    thumbnail: item.snippet.thumbnails.default.url,
                    channelName: item.snippet.channelTitle,
                    title: (item.snippet.title.length > 65) ? item.snippet.title.substr(0, 65 - 1) + '...' : item.snippet.title, // cut the title if too long
                    longTitle: item.snippet.title,
                    publishTime: item.publishTime,
                }
            });

            setList(items);

            if (count < 5) {
                count++;
                ytApiSearch(term, response.data.nextPageToken);
            }
            else {
                count = 0;
            } // TODO move reset to form click, if 'load-more' option added;
            openLoader(false);
        })
        .catch(function (error) {
            if (error.response.status === 400) {
                window.localStorage.removeItem("API_KEY");
            }
            startYtsr(term); // backup method 2
            // openLoader(false);
        })
        .then(function () {
            // always executed
        });
};

async function startYtsr(term) {
    openLoader(true);
    downAxios.get('ytsr', {
        params: {
            term: term,
            type: mode,
        }
    })
        .then(function (response) {
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