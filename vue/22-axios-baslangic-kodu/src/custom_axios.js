import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://vuejs-axios-blog-f7f22-default-rtdb.firebaseio.com`,
})