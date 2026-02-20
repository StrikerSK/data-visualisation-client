import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { apexDataFetcher } from '../../lib/DataFetcher';
import SpinnerComponent from '../SpinnerComponent';
import { monthArray } from '../controlls/checkboxes/CheckboxMonths';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';

interface ApexAreaChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexAreaChart: React.FC<ApexAreaChartProps> = ({ months, person, validity, sellType }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

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

  const finaliseTransaction = (result: any[]) => {
    setData(result);
    changeLoadedState(true);
  };

  useEffect(() => {
    apexDataFetcher([months, person, validity, sellType], finaliseTransaction);
  }, [months, person, validity, sellType]);

  const chart = (
    <ReactApexChart
      options={options}
      series={data}
      type="area"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );

  return <SpinnerComponent children={chart} isDataLoaded={isLoaded} />;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexAreaChart);
