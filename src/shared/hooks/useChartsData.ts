import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const hostUrl = 'http://localhost:8080';

const generateParamsQuery = (parametersList: string[]): string => {
  return parametersList.join('&');
};

export const nivoBarPath = '/nivo/coupon/bar?upperGroup=month&lowerGroup=person&';
export const nivoPiePath = '/nivo/coupon/pie?group=year&';

export const useBarData = (url: string, parameters: string[]) => {
  return useQuery({
    queryKey: ['barData', url, ...parameters],
    queryFn: async () => {
      const { data } = await axios.get(hostUrl + url + generateParamsQuery(parameters));
      return data;
    },
  });
};

export const usePieData = (url: string, parameters: string[]) => {
  return useQuery({
    queryKey: ['pieData', url, ...parameters],
    queryFn: async () => {
      const { data } = await axios.get(hostUrl + url + generateParamsQuery(parameters));
      return data;
    },
  });
};

export const useLineData = (parameters: string[]) => {
  return useQuery({
    queryKey: ['lineData', ...parameters],
    queryFn: async () => {
      const { data } = await axios.get(hostUrl + '/nivo/line?' + generateParamsQuery(parameters));
      return data;
    },
  });
};

export const useBubbleData = (parameters: string[]) => {
  return useQuery({
    queryKey: ['bubbleData', ...parameters],
    queryFn: async () => {
      const { data } = await axios.get(hostUrl + '/nivo/bubble?' + generateParamsQuery(parameters));
      return data;
    },
  });
};

export const useStreamData = (parameters: string[]) => {
  return useQuery({
    queryKey: ['streamData', ...parameters],
    queryFn: async () => {
      const { data } = await axios.get(
        hostUrl + '/nivo/getTicketData?' + generateParamsQuery(parameters)
      );
      return data;
    },
  });
};

export const useApexData = (parameters: string[]) => {
  return useQuery({
    queryKey: ['apexData', ...parameters],
    queryFn: async () => {
      const { data } = await axios.get(hostUrl + '/apex/data?' + generateParamsQuery(parameters));
      return data;
    },
  });
};
