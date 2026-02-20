import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { apexDataFetcher } from '../../lib/DataFetcher';
import SpinnerComponent from '../SpinnerComponent';
import { connect } from 'react-redux';
import { monthArray } from '../controlls/checkboxes/CheckboxMonths';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';

interface ApexRadarChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexRadarChart: React.FC<ApexRadarChartProps> = ({ months, person, validity, sellType }) => {
  const [series, setSeries] = useState<any[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

  const finaliseTransaction = (result: any[]) => {
    setSeries(result);
    changeLoadedState(true);
  };

  useEffect(() => {
    apexDataFetcher([months, person, validity, sellType], finaliseTransaction);
  }, [months, person, validity, sellType]);

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
      series={series}
      type="radar"
      width="100%"
      height="100%"
      className={'apex-chart'}
    />
  );

  return <SpinnerComponent children={chart} isDataLoaded={isLoaded} />;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexRadarChart);
