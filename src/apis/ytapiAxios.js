import axios from 'axios';
// const API_KEY = "AIzaSyDfI1OdoNGA1jYY23yzSy6QLtv14Tsafw0"; // TODO move to get from the server by user-key; 
const API_KEY = "AIzaSyBuyI_Ns5sfXsoAMfd_Y3UxgwrXoOdrB8s"; // TODO move to get from the server by user-key; 
// &key=&q=dddd&maxResults=50&part=snippet&type=video

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',

  // headers: { 
  //   // 'X-Custom-Header': 'foobar',
  //   "Authorization": "Bearer "+API_KEY,
  // },
  // paramps:{
  //   key: API_KEY,
  //   timeout: 3000,
  //   maxResults: 50,
  //   part: 'snippet',
  //   type: 'video',
  // }
});