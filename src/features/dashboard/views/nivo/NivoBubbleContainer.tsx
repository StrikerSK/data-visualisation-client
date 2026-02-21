import React from 'react';
import NivoBubbleComponent from '../../../charts/nivo/NivoBubbleComponent';
import GraphComponent from '../../components/GraphComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';
import { useBubbleData } from '../../../../shared/hooks/useChartsData';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';

const NivoBubbleContainer: React.FC = () => {
  const { months, person, validity, sellType, color } = useSelector((state: RootState) =>
    accessAll(state)
  );
  const { isPending, data, isError } = useBubbleData({
    month: months,
    person,
    validity,
    type: sellType,
    color,
  });

  return (
    <GraphComponent
      graph={<NivoBubbleComponent data={data} color={color} />}
      configs={DefaultNivoConfiguration}
      isLoaded={!isPending && !isError && !!data}
    />
  );
};

export default NivoBubbleContainer;
