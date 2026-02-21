import React from 'react';
import GraphComponent from '../../components/GraphComponent';
import NivoStreamComponent from '../../../charts/nivo/NivoStreamComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';
import { useStreamData } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const NivoStreamContainer: React.FC = () => {
  const { months, person, validity, sellType } = useSelector((state: RootState) =>
    accessAll(state)
  );
  const { isPending, data, isError } = useStreamData({
    month: months,
    person,
    validity,
    type: sellType,
  });

  return (
    <GraphComponent
      graph={<NivoStreamComponent data={data || []} />}
      configs={DefaultNivoConfiguration}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default NivoStreamContainer;
