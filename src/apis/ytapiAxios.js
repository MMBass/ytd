import axios from 'axios';

//guide for plylist items: https://developers.google.com/youtube/v3/docs/?apix=true#PlaylistItems
// for next page add to params "nextPageToken": [token from response]

export default axios.create({

  baseURL: 'https://www.googleapis.com/youtube/v3/',
  
});