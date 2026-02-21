import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import SpinnerComponent from '../SpinnerComponent';
import { monthArray } from '../controlls/checkboxes/CheckboxMonths';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { isDesktop } from '../../lib/Functions';
import { RootState } from '../../types';
import { useApexData } from '../../lib/hooks/useChartsData';

interface ApexBarChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
  barLayout: 'vertical' | 'horizontal';
  barGrouping: 'stacked' | 'grouped';
}

const ApexBarChart: React.FC<ApexBarChartProps> = ({
  months,
  person,
  validity,
  sellType,
  barLayout,
  barGrouping,
}) => {
  const { data, isLoading } = useApexData([months, person, validity, sellType]);

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

  const chart = (
    <ReactApexChart
      options={options}
      series={data || []}
      type="bar"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );

  return <SpinnerComponent isDataLoaded={!isLoading}>{chart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexBarChart);
