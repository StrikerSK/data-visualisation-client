import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { monthArray } from '../../filters/components/CheckboxMonths';

const colors = [
  '#F3B415',
  '#F27036',
  '#663F59',
  '#6A6E94',
  '#4E88B4',
  '#00A7C6',
  '#18D8D8',
  '#A9D794',
  '#46AF78',
  '#A93F55',
  '#8C5E58',
  '#2176FF',
  '#33A1FD',
  '#7A918D',
  '#BAFF29',
];

interface ApexHeatmapChartProps {
  data: any[];
}

const ApexHeatmapChart: React.FC<ApexHeatmapChartProps> = ({ data }) => {
  const options: ApexOptions = {
    dataLabels: {
      enabled: false,
    },
    colors: colors,
    xaxis: {
      type: 'category',
      categories: monthArray,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={data || []}
      type="heatmap"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );
};

export default ApexHeatmapChart;
