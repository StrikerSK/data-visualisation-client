import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { monthArray } from '../../filters/components/CheckboxMonths';

interface ApexLineChartProps {
  data: any[];
}

const ApexLineChart: React.FC<ApexLineChartProps> = ({ data }) => {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
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
      type="line"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );
};

export default ApexLineChart;
