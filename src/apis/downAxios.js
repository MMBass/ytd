import axios from 'axios';

export default axios.create({
  baseURL: 'https://bass-ytd.herokuapp.com/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});