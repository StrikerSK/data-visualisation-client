import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { monthArray } from '../../filters/components/CheckboxMonths';
import { isDesktop } from '../../../shared/utils/Functions';

interface ApexBarChartProps {
  data: any[];
  barLayout: 'vertical' | 'horizontal';
  barGrouping: 'stacked' | 'grouped';
}

const ApexBarChart: React.FC<ApexBarChartProps> = ({ data, barLayout, barGrouping }) => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: barGrouping === 'stacked',
    },
    dataLabels: {
      enabled: isDesktop() && barGrouping === 'stacked',
    },
    plotOptions: {
      bar: {
        horizontal: barLayout === 'horizontal',
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      categories: monthArray,
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      offsetX: 30,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={data || []}
      type="bar"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );
};

export default ApexBarChart;
