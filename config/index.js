import axios from 'axios';

import errorHandler from './errorHandler.js';
console.log(process.env.NEXT_PUBLIC_API)
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
