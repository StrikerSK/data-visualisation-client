import React from 'react';
import NivoPieComponent from '../../../charts/nivo/NivoPieComponent';
import GraphComponent from '../../components/GraphComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';
import { usePieData, nivoPiePath } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const NivoPieContainer: React.FC = () => {
  const { months, person, validity, sellType, color } = useSelector((state: RootState) =>
    accessAll(state)
  );
  const { isPending, data, isError } = usePieData(nivoPiePath, {
    month: months,
    person,
    validity,
    type: sellType,
    color,
  });

  return (
    <GraphComponent
      graph={<NivoPieComponent data={data || []} color={color} />}
      configs={DefaultNivoConfiguration}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default NivoPieContainer;
