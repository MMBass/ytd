import axios from 'axios';
const API_KEY = "AIzaSyBuyI_Ns5sfXsoAMfd_Y3UxgwrXoOdrB8s"; // TODO move to get from the server by user-key; 

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  key: API_KEY,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});