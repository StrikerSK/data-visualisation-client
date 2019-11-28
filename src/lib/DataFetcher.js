import axios from "axios"

// const hostUrl = "http://localhost:8080";
const hostUrl = "https://pid-data-server.herokuapp.com/";

const generateParamsQuery = (parametersList) => {
	return parametersList.join("&");
};

export const pieDataGetter = (parameters, callbackFunction) => {
	axios.get(hostUrl + "/nivo/pie?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};

export const barDataGetter = (parameters, callbackFunction) => {
	axios.get(hostUrl + "/nivo/bar?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
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
	axios.get(hostUrl + "/apex/area?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};
