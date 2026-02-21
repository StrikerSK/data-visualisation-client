import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import SpinnerComponent from '../../../shared/components/SpinnerComponent';
import { monthArray } from '../../filters/components/CheckboxMonths';
import { connect } from 'react-redux';
import { accessAll } from '../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../shared/types';
import { useApexData } from '../../../shared/hooks/useChartsData';

interface ApexAreaChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexAreaChart: React.FC<ApexAreaChartProps> = ({ months, person, validity, sellType }) => {
  const { data, isLoading } = useApexData([months, person, validity, sellType]);

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

  const chart = (
    <ReactApexChart
      options={options}
      series={data || []}
      type="area"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );

  return <SpinnerComponent isDataLoaded={!isLoading}>{chart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexAreaChart);
