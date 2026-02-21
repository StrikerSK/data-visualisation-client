import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import SpinnerComponent from '../SpinnerComponent';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';
import { usePieData, nivoPiePath } from '../../lib/hooks/useChartsData';

interface ApexPieChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexPieChart: React.FC<ApexPieChartProps> = ({ months, person, validity, sellType }) => {
  const { data, isLoading } = usePieData(nivoPiePath, [months, person, validity, sellType]);

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

  const chart = (
    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );

  return <SpinnerComponent isDataLoaded={!isLoading}>{chart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexPieChart);
