import axios from 'axios'

// export const host_url = "http://localhost:8080";
export const host_url = "https://pid-data-server.herokuapp.com/";

export const pieDataGetter = (parameters, callbackFunction) => {
	axios.get(host_url + "/nivo/pie?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};

export const barDataGetter = (parameters, callbackFunction) => {
	axios.get(host_url + "/nivo/bar?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};

export const lineDataGetter = (parameters, callbackFunction) => {
	axios.get(host_url + "/nivo/line?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};

export const streamDataGetter = (parameters, callbackFunction) => {
	axios.get(host_url + "/nivo/getTicketData?" + generateParamsQuery(parameters))
		.then(({data}) => callbackFunction(data));
};

const generateParamsQuery = (parametersList) => {
	return parametersList.join("&");
};