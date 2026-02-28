import axios from 'axios';
import qs from 'qs';
import { store } from '../store';

// Create a configured axios instance without a fixed baseURL
export const apiClient = axios.create({
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true });
  },
});

// Add a request interceptor to dynamically set the baseURL from Redux
apiClient.interceptors.request.use((config) => {
  const state = store.getState();
  // Support both persisted and non-persisted state structures
  const serverUrl = state.generalReducer?.serverUrl || 'http://localhost:8081';
  
  config.baseURL = serverUrl;
  return config;
});

// API endpoints
export const ENDPOINTS = {
  NIVO_BAR: '/nivo/coupon/bar',
  NIVO_PIE: '/nivo/coupon/pie',
  NIVO_BUBBLE: '/nivo/coupon/bubble',
  NIVO_LINE: '/nivo/coupon/line',
  NIVO_TICKET: '/nivo/getTicketData',
  RECHARTS_BAR: '/recharts/bar',
  APEX_COUPON: '/apex/coupon',
};

export default apiClient;
