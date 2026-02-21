import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { fetchBarData, nivoPiePath } from '../../lib/DataFetcher';
import SpinnerComponent from '../SpinnerComponent';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';

interface ApexRadialChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexRadialChart: React.FC<ApexRadialChartProps> = ({
  months,
  person,
  validity,
  sellType,
}) => {
  const [series, setSeries] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

  const options: ApexOptions = {
    labels: labels,
    legend: {
      show: true,
      position: 'top',
    },
  };

  const processData = (result: any[]) => {
    const values = result.map(({ value }) => value);
    const getSum = () => {
      return values.reduce((total, sum) => total + sum, 0);
    };

    const sum = getSum();
    setLabels(result.map(({ label }) => label));
    setSeries(result.map(({ value }) => Math.round((value / sum) * 100)));
  };

  useEffect(() => {
    fetchBarData(nivoPiePath, [person, months, sellType, validity])
      .then(({ data }) => processData(data))
      .then(() => changeLoadedState(true))
      .catch(console.error);
  }, [person, months, sellType, validity]);

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

  return <SpinnerComponent isDataLoaded={isLoaded}>{chart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexRadialChart);
