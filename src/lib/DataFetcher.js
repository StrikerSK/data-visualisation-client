import axios from "axios"
import qs from "qs"

const hostUrl = "http://localhost:8081";
//const hostUrl = "https://pid-data-server.herokuapp.com/";

const generateParamsQuery = (parametersList) => {
	return parametersList.join("&");
};

export const nivoBarPath = hostUrl + "/nivo/coupon/bar"
export const nivoPiePath = hostUrl + "/nivo/coupon/pie"

export const fetchBarData = (url, parameters) => {
	//return axios.get(hostUrl + url + generateParamsQuery(parameters));
	return axios.get(url, {
		params: {
			upperGroup: "month",
			lowerGroup: "person"
		},
		paramsSerializer: params => {
			return qs.stringify(params)
		}
	})
};

export const fetchBarDataV2 = (url, parameters) => {
	return axios.get(url, {
		params: {
			upperGroup: "month",
			lowerGroup: "validity",
			...parameters
		},
		paramsSerializer: function (params) {
			return qs.stringify(params, { arrayFormat: "repeat" });
		},
	})
};

export const lineDataGetter = (parameters, callbackFunction) => {
	axios.get(hostUrl + "/nivo/line?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};

export const streamDataGetter = (parameters, callbackFunction) => {
	axios.get(hostUrl + "/nivo/getTicketData?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};

export const bubbleDataGetter = (parameters, callbackFunction) => {
	axios.get(hostUrl + "/nivo/bubble?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};

export const rechartsBarDataGetter = (parameters, callbackFunction) => {
	axios.get(hostUrl + "/recharts/bar?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};

export const apexDataFetcher = (parameters, callbackFunction) => {
	axios.get(hostUrl + "/apex/coupon?upperGroup=year&lowerGroup=month&" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};
