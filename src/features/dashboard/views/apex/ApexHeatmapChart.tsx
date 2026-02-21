import React from 'react';
import ApexHeatmapChart from '../../../charts/apex/ApexHeatmapChart';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';
import { useApexData } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const ApexHeatmapContainer: React.FC = () => {
  const { months, person, validity, sellType } = useSelector((state: RootState) => accessAll(state));
  const { isPending, data, isError } = useApexData({
    person,
    month: months,
    type: sellType,
    validity,
  });

  return (
    <GraphComponent
      graph={<ApexHeatmapChart data={data || []} />}
      configs={DefaultConfiguration}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default ApexHeatmapContainer;
