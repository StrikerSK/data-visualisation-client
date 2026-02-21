import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import SpinnerComponent from '../../../shared/components/SpinnerComponent';
import { connect } from 'react-redux';
import { accessAll } from '../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../shared/types';
import { usePieData, nivoPiePath } from '../../../shared/hooks/useChartsData';

interface ApexRadialChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexRadialChart: React.FC<ApexRadialChartProps> = ({ months, person, validity, sellType }) => {
  const { data, isLoading } = usePieData(nivoPiePath, [person, months, sellType, validity]);

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

  const chart = (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );

  return <SpinnerComponent isDataLoaded={!isLoading}>{chart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexRadialChart);
