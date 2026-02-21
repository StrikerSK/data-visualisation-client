import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { monthArray } from '../../filters/components/CheckboxMonths';

interface ApexRadarChartProps {
  data: any[];
}

const ApexRadarChart: React.FC<ApexRadarChartProps> = ({ data }) => {
  const options: ApexOptions = {
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    fill: {
      opacity: 0.4,
    },
    labels: monthArray,
  };

  return (
    <ReactApexChart
      options={options}
      series={data || []}
      type="radar"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );
};

export default ApexRadarChart;
