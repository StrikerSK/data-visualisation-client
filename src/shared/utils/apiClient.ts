import axios from 'axios';
import qs from 'qs';

// Safely access environment variables
const HOST_URL = (typeof process !== 'undefined' && process.env && process.env.REACT_APP_API_URL) 
  || 'http://localhost:8080';

// Create a configured axios instance
export const apiClient = axios.create({
  baseURL: HOST_URL,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true });
  },
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
