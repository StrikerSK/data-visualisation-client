import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { fetchBarData, nivoPiePath } from '../../lib/DataFetcher';
import SpinnerComponent from '../SpinnerComponent';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';

interface ApexPieChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexPieChart: React.FC<ApexPieChartProps> = ({ months, person, validity, sellType }) => {
  const [series, setSeries] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

  const processData = (data: any[]) => {
    setLabels(data.map(({ label }) => label));
    setSeries(data.map(({ value }) => value));
  };

  useEffect(() => {
    fetchBarData(nivoPiePath, [months, person, validity, sellType])
      .then(({ data }) => processData(data))
      .then(() => changeLoadedState(true))
      .catch(console.error);
  }, [months, person, validity, sellType]);

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

  return <SpinnerComponent isDataLoaded={isLoaded}>{chart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexPieChart);
