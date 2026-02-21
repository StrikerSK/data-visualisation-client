import React, { ReactNode } from 'react';
import ApexBarChart from '../../../charts/apex/ApexBarChart';
import GraphComponent from '../../components/GraphComponent';
import SelectGroupLayout from '../../../filters/components/SelectGroupLayout';
import SelectBarLayout from '../../../filters/components/SelectBarLayout';
import { DefaultConfiguration } from '../AbstractCharts';
import { useApexData } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const BarConfigurations: ReactNode[] = [
  ...DefaultConfiguration,
  <SelectGroupLayout key="group" />,
  <SelectBarLayout key="layout" />,
];

const ApexBarContainer: React.FC = () => {
  const { months, person, validity, sellType, barLayout, barGrouping } = useSelector(
    (state: RootState) => accessAll(state)
  );
  const { isPending, data, isError } = useApexData({
    person,
    month: months,
    type: sellType,
    validity,
  });

  return (
    <GraphComponent
      graph={
        <ApexBarChart data={data || []} barLayout={barLayout} barGrouping={barGrouping} />
      }
      configs={BarConfigurations}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default ApexBarContainer;
