import React from 'react';
import ApexLineChart from '../../../charts/apex/ApexLineChart';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';
import { useApexData } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const ApexLineContainer: React.FC = () => {
  const { months, person, validity, sellType } = useSelector((state: RootState) => accessAll(state));
  const { isPending, data, isError } = useApexData({
    person,
    month: months,
    type: sellType,
    validity,
  });

  return (
    <GraphComponent
      graph={<ApexLineChart data={data || []} />}
      configs={DefaultConfiguration}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default ApexLineContainer;
