import axios, { AxiosResponse } from 'axios';

const hostUrl = 'http://localhost:8080';

const generateParamsQuery = (parametersList: string[]): string => {
  return parametersList.join('&');
};

export const nivoBarPath = '/nivo/coupon/bar?upperGroup=month&lowerGroup=person&';
export const nivoPiePath = '/nivo/coupon/pie?group=year&';

export const fetchBarData = (url: string, parameters: string[]): Promise<AxiosResponse<any>> => {
  return axios.get(hostUrl + url + generateParamsQuery(parameters));
};

export const lineDataGetter = (parameters: string[], callbackFunction: (data: any) => void): void => {
  axios
    .get(hostUrl + '/nivo/line?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};

export const streamDataGetter = (
  parameters: string[],
  callbackFunction: (data: any) => void
): void => {
  axios
    .get(hostUrl + '/nivo/getTicketData?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};

export const bubbleDataGetter = (
  parameters: string[],
  callbackFunction: (data: any) => void
): void => {
  axios
    .get(hostUrl + '/nivo/bubble?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};

export const rechartsBarDataGetter = (
  parameters: string[],
  callbackFunction: (data: any) => void
): void => {
  axios
    .get(hostUrl + '/recharts/bar?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};

export const apexDataFetcher = (
  parameters: string[],
  callbackFunction: (data: any) => void
): void => {
  axios
    .get(hostUrl + '/apex/data?' + generateParamsQuery(parameters))
    .then(({ data }) => callbackFunction(data));
};
