import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ApexRadialChartProps {
  data: any[];
}

const ApexRadialChart: React.FC<ApexRadialChartProps> = ({ data }) => {
  const labels = data ? data.map((item: any) => item.label) : [];
  const values = data ? data.map((item: any) => item.value) : [];
  const sum = values.reduce((total: number, val: number) => total + val, 0);
  const series = values.map((val: number) => Math.round((val / (sum || 1)) * 100));

  const options: ApexOptions = {
    labels: labels,
    legend: {
      show: true,
      position: 'top',
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );
};

export default ApexRadialChart;
