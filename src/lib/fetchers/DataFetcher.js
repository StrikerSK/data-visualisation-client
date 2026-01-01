import axios from "axios";
import qs from "qs";

// Use environment variable with fallback
const HOST_URL = process.env.REACT_APP_API_URL || "http://localhost:8081";

// Create a configured axios instance
const apiClient = axios.create({
	baseURL: HOST_URL,
	paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

// API endpoints
export const ENDPOINTS = {
	NIVO_BAR: "/nivo/coupon/bar",
	NIVO_PIE: "/nivo/coupon/pie",
	NIVO_BUBBLE: "/nivo/coupon/bubble",
	NIVO_LINE: "/nivo/coupon/line",
	NIVO_TICKET: "/nivo/getTicketData",
	RECHARTS_BAR: "/recharts/bar",
	APEX_COUPON: "/apex/coupon",
};

// Generic fetcher with default params
const createFetcher = (endpoint, defaultParams) => (parameters = {}) =>
	apiClient.get(endpoint, {
		params: { ...defaultParams, ...parameters },
	});

// Nivo fetchers
export const fetchNivoBarData = createFetcher(ENDPOINTS.NIVO_BAR, {
	upperGroup: "month",
	lowerGroup: "validity",
});

export const fetchNivoPieData = createFetcher(ENDPOINTS.NIVO_PIE, {
	group: "person",
});

export const fetchNivoBubbleData = createFetcher(ENDPOINTS.NIVO_BUBBLE, {
	upperGroup: "month",
	lowerGroup: "validity",
});

export const fetchNivoLineData = createFetcher(ENDPOINTS.NIVO_LINE, {
	upperGroup: "person",
	lowerGroup: "month",
});

// Other fetchers - now return promises for consistency
export const fetchStreamData = (parameters = {}) =>
	apiClient.get(ENDPOINTS.NIVO_TICKET, { params: parameters });

export const fetchRechartsBarData = (parameters = {}) =>
	apiClient.get(ENDPOINTS.RECHARTS_BAR, { params: parameters });

export const fetchApexData = (parameters = {}) =>
	apiClient.get(ENDPOINTS.APEX_COUPON, {
		params: { upperGroup: "year", lowerGroup: "month", ...parameters },
	});

export default apiClient;