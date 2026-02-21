import { useQuery } from '@tanstack/react-query';
import { apiClient, ENDPOINTS } from '../utils/apiClient';

export interface ChartParams {
  month?: string[];
  person?: string[];
  type?: string[];
  validity?: string[];
  color?: string;
  upperGroup?: string;
  lowerGroup?: string;
  group?: string;
}

export const nivoBarPath = ENDPOINTS.NIVO_BAR;
export const nivoPiePath = ENDPOINTS.NIVO_PIE;

export const useBarData = (url: string, params: ChartParams) => {
  return useQuery({
    queryKey: ['barData', url, params],
    queryFn: async () => {
      const { data } = await apiClient.get(url, {
        params: {
          upperGroup: 'month',
          lowerGroup: 'validity',
          ...params,
        },
      });
      return data;
    },
  });
};

export const usePieData = (url: string, params: ChartParams) => {
  return useQuery({
    queryKey: ['pieData', url, params],
    queryFn: async () => {
      const { data } = await apiClient.get(url, {
        params: {
          group: 'person',
          ...params,
        },
      });
      return data;
    },
  });
};

export const useLineData = (params: ChartParams) => {
  return useQuery({
    queryKey: ['lineData', params],
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.NIVO_LINE, {
        params: {
          upperGroup: 'person',
          lowerGroup: 'month',
          ...params,
        },
      });
      return data;
    },
  });
};

export const useBubbleData = (params: ChartParams) => {
  return useQuery({
    queryKey: ['bubbleData', params],
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.NIVO_BUBBLE, {
        params: {
          upperGroup: 'month',
          lowerGroup: 'validity',
          ...params,
        },
      });
      return data;
    },
  });
};

export const useStreamData = (params: ChartParams) => {
  return useQuery({
    queryKey: ['streamData', params],
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.NIVO_TICKET, {
        params,
      });
      return data;
    },
  });
};

export const useApexData = (params: ChartParams) => {
  return useQuery({
    queryKey: ['apexData', params],
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.APEX_COUPON, {
        params: {
          upperGroup: 'year',
          lowerGroup: 'month',
          ...params,
        },
      });
      return data;
    },
  });
};
