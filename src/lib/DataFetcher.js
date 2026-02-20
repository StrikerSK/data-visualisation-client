import axios from 'axios';

const hostUrl = 'http://localhost:8080';
//const hostUrl = "https://pid-data-server.herokuapp.com/";

const generateParamsQuery = (parametersList) => {
  return parametersList.join('&');
};

export const nivoBarPath = '/nivo/coupon/bar?upperGroup=month&lowerGroup=person&';
export const nivoPiePath = '/nivo/coupon/pie?group=year&';

export const fetchBarData = (url, parameters) => {
  return axios.get(hostUrl + url + generateParamsQuery(parameters));
};

export const lineDataGetter = (parameters, callbackFunction) => {
  axios
    .get(hostUrl + '/nivo/line?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};

export const streamDataGetter = (parameters, callbackFunction) => {
  axios
    .get(hostUrl + '/nivo/getTicketData?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};

export const bubbleDataGetter = (parameters, callbackFunction) => {
  axios
    .get(hostUrl + '/nivo/bubble?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};

export const rechartsBarDataGetter = (parameters, callbackFunction) => {
  axios
    .get(hostUrl + '/recharts/bar?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};

export const apexDataFetcher = (parameters, callbackFunction) => {
  axios
    .get(hostUrl + '/apex/data?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};
