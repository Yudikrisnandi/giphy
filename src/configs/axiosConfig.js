import axios from 'axios';
import { BASE_URL, API_KEY } from './constant';
export const axiosInstance = axios.create({ baseURL: BASE_URL });
