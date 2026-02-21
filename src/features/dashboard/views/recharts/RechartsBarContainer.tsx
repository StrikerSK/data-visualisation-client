import React from 'react';
import BarChartComponent from '../../../charts/recharts/BarChartComponent';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';
import { useBarData, nivoBarPath } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const RechartsBarContainer: React.FC = () => {
  const { months, person, validity, sellType } = useSelector((state: RootState) => accessAll(state));
  const { isPending, data, isError } = useBarData(nivoBarPath, {
    person,
    month: months,
    type: sellType,
    validity,
  });

  return (
    <GraphComponent
      graph={<BarChartComponent data={data || []} />}
      configs={DefaultConfiguration}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default RechartsBarContainer;
