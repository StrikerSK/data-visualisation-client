import React from 'react';
import NivoLineComponent from '../../../charts/nivo/NivoLineComponent';
import GraphComponent from '../../components/GraphComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';
import { useLineData } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const NivoLineContainer: React.FC = () => {
  const { months, person, validity, sellType, color } = useSelector((state: RootState) =>
    accessAll(state)
  );
  const { isPending, data, isError } = useLineData({
    month: months,
    person,
    validity,
    type: sellType,
  });

  return (
    <GraphComponent
      graph={<NivoLineComponent data={data || []} color={color} />}
      configs={DefaultNivoConfiguration}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default NivoLineContainer;
