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
  // Destructure to exclude color from queryKey and request params
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...fetchParams } = params;

  return useQuery({
    queryKey: ['barData', url, fetchParams],
    queryFn: async () => {
      const { data } = await apiClient.get(url, {
        params: {
          upperGroup: 'month',
          lowerGroup: 'validity',
          ...fetchParams,
        },
      });
      return data;
    },
  });
};

export const usePieData = (url: string, params: ChartParams) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...fetchParams } = params;

  return useQuery({
    queryKey: ['pieData', url, fetchParams],
    queryFn: async () => {
      const { data } = await apiClient.get(url, {
        params: {
          group: 'person',
          ...fetchParams,
        },
      });
      return data;
    },
  });
};

export const useLineData = (params: ChartParams) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...fetchParams } = params;

  return useQuery({
    queryKey: ['lineData', fetchParams],
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.NIVO_LINE, {
        params: {
          upperGroup: 'person',
          lowerGroup: 'month',
          ...fetchParams,
        },
      });
      return data;
    },
  });
};

export const useBubbleData = (params: ChartParams) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...fetchParams } = params;

  return useQuery({
    queryKey: ['bubbleData', fetchParams],
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.NIVO_BUBBLE, {
        params: {
          upperGroup: 'month',
          lowerGroup: 'validity',
          ...fetchParams,
        },
      });
      return data;
    },
  });
};

export const useStreamData = (params: ChartParams) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...fetchParams } = params;

  return useQuery({
    queryKey: ['streamData', fetchParams],
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.NIVO_TICKET, {
        params: fetchParams,
      });
      return data;
    },
  });
};

export const useApexData = (params: ChartParams) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...fetchParams } = params;

  return useQuery({
    queryKey: ['apexData', fetchParams],
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.APEX_COUPON, {
        params: {
          upperGroup: 'year',
          lowerGroup: 'month',
          ...fetchParams,
        },
      });
      return data;
    },
  });
};
