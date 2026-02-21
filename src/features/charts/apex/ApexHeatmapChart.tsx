import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import SpinnerComponent from '../../../shared/components/SpinnerComponent';
import { connect } from 'react-redux';
import { monthArray } from '../../filters/components/CheckboxMonths';
import { accessAll } from '../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../shared/types';
import { useApexData } from '../../../shared/hooks/useChartsData';

const colors = [
  '#F3B415',
  '#F27036',
  '#663F59',
  '#6A6E94',
  '#4E88B4',
  '#00A7C6',
  '#18D8D8',
  '#A9D794',
  '#46AF78',
  '#A93F55',
  '#8C5E58',
  '#2176FF',
  '#33A1FD',
  '#7A918D',
  '#BAFF29',
];

interface ApexHeatmapChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexHeatmapChart: React.FC<ApexHeatmapChartProps> = ({
  months,
  person,
  validity,
  sellType,
}) => {
  const { data, isPending, isError } = useApexData([months, person, validity, sellType]);

  const options: ApexOptions = {
    dataLabels: {
      enabled: false,
    },
    colors: colors,
    xaxis: {
      type: 'category',
      categories: monthArray,
    },
  };

  const chart = (
    <ReactApexChart
      options={options}
      series={data || []}
      type="heatmap"
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

export default connect(mapStateToProps)(ApexHeatmapChart);
