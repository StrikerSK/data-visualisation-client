import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import SpinnerComponent from '../../../shared/components/SpinnerComponent';
import { connect } from 'react-redux';
import { accessAll } from '../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../shared/types';
import { usePieData, nivoPiePath } from '../../../shared/hooks/useChartsData';

interface ApexPieChartProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const ApexPieChart: React.FC<ApexPieChartProps> = ({ months, person, validity, sellType }) => {
  const { data, isPending, isError } = usePieData(nivoPiePath, [
    months,
    person,
    validity,
    sellType,
  ]);

  const labels = data ? data.map((item: any) => item.label) : [];
  const series = data ? data.map((item: any) => item.value) : [];

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

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      {chart}
    </SpinnerComponent>
  );
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(ApexPieChart);
