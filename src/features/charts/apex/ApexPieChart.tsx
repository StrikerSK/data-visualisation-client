import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ApexPieChartProps {
  data: any[];
}

const ApexPieChart: React.FC<ApexPieChartProps> = ({ data }) => {
  const labels = data ? data.map((item: any) => item.label) : [];
  const series = data ? data.map((item: any) => item.value) : [];

  const options: ApexOptions = {
    labels: labels,
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
            height: '100%',
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );
};

export default ApexPieChart;
