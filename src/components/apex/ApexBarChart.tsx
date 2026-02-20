import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { apexDataFetcher } from '../../lib/DataFetcher';
import SpinnerComponent from '../SpinnerComponent';
import { monthArray } from '../controlls/checkboxes/CheckboxMonths';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { isDesktop } from '../../lib/Functions';
import { RootState } from '../../types';

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
  const [data, setData] = useState<any[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

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

  const finaliseTransaction = (result: any[]) => {
    setData(result);
    changeLoadedState(true);
  };

  useEffect(() => {
    apexDataFetcher([months, person, validity, sellType], finaliseTransaction);
  }, [months, person, barLayout, barGrouping, validity, sellType]);

  const chart = (
    <ReactApexChart
      options={options}
      series={data}
      type="bar"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );

  return <SpinnerComponent children={chart} isDataLoaded={isLoaded} />;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexBarChart);
