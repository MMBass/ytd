import axios from 'axios';

//guide for plilist items: https://developers.google.com/youtube/v3/docs/?apix=true#PlaylistItems

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