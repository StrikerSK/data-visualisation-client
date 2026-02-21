import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { monthArray } from '../../filters/components/CheckboxMonths';

interface ApexAreaChartProps {
  data: any[];
}

const ApexAreaChart: React.FC<ApexAreaChartProps> = ({ data }) => {
  const options: ApexOptions = {
    chart: {
      stacked: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: monthArray,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      offsetX: 40,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={data || []}
      type="area"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );
};

export default ApexAreaChart;
