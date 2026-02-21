import React from 'react';
import ApexPieChart from '../../../charts/apex/ApexPieChart';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';
import { usePieData, nivoPiePath } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const ApexPieContainer: React.FC = () => {
  const { months, person, validity, sellType } = useSelector((state: RootState) => accessAll(state));
  const { isPending, data, isError } = usePieData(nivoPiePath, {
    person,
    month: months,
    type: sellType,
    validity,
  });

  return (
    <GraphComponent
      graph={<ApexPieChart data={data || []} />}
      configs={DefaultConfiguration}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default ApexPieContainer;
