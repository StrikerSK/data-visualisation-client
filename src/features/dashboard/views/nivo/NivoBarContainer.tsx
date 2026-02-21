import React, { ReactNode } from 'react';
import GraphComponent from '../../components/GraphComponent';
import NivoBarComponent from '../../../charts/nivo/NivoBarComponent';
import SelectBarLayout from '../../../filters/components/SelectBarLayout';
import SelectGroupLayout from '../../../filters/components/SelectGroupLayout';
import { DefaultNivoConfiguration } from './AbstractNivo';
import { useBarData, nivoBarPath } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const ComponentConfigurations: ReactNode[] = [
  ...DefaultNivoConfiguration,
  <SelectGroupLayout key="group" />,
  <SelectBarLayout key="layout" />,
];

const NivoBarContainer: React.FC = () => {
  const { months, person, validity, sellType, barGrouping, barLayout, color } = useSelector(
    (state: RootState) => accessAll(state)
  );
  const { isPending, data, isError } = useBarData(nivoBarPath, {
    person,
    month: months,
    type: sellType,
    validity,
  });

  return (
    <GraphComponent
      graph={
        <NivoBarComponent
          data={data || []}
          barGrouping={barGrouping}
          barLayout={barLayout}
          color={color}
        />
      }
      configs={ComponentConfigurations}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default NivoBarContainer;
