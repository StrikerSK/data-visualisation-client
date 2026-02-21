import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import SpinnerComponent from '../../../shared/components/SpinnerComponent';
import { connect } from 'react-redux';
import { monthArray } from '../../filters/components/CheckboxMonths';
import { accessAll } from '../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../shared/types';
import { useApexData } from '../../../shared/hooks/useChartsData';

interface ApexRadarChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexRadarChart: React.FC<ApexRadarChartProps> = ({ months, person, validity, sellType }) => {
  const { data, isPending, isError } = useApexData([months, person, validity, sellType]);

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

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      {chart}
    </SpinnerComponent>
  );
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexRadarChart);
