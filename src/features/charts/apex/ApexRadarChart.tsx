import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import SpinnerComponent from '../SpinnerComponent';
import { connect } from 'react-redux';
import { monthArray } from '../controlls/checkboxes/CheckboxMonths';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';
import { useApexData } from '../../lib/hooks/useChartsData';

interface ApexRadarChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexRadarChart: React.FC<ApexRadarChartProps> = ({ months, person, validity, sellType }) => {
  const { data, isLoading } = useApexData([months, person, validity, sellType]);

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

  const chart = (
    <ReactApexChart
      options={options}
      series={data || []}
      type="radar"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );

  return <SpinnerComponent isDataLoaded={!isLoading}>{chart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexRadarChart);
