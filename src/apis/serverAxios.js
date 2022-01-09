import https from 'https';
import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:5000/',
  baseURL: 'https://bass-ytd.herokuapp.com/',
  timeout: 25000,
  headers: {
    'x-access-token': window.sessionStorage.getItem("ACCESS_TOKEN"),
  },
  httpsAgent: new https.Agent({ keepAlive: true }),
});