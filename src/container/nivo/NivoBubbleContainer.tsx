import React from 'react';
import NivoBubbleComponent from '../../components/nivo/NivoBubbleComponent';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';

const NivoBubbleContainer: React.FC = () => (
  <GraphComponent graph={<NivoBubbleComponent />} configs={DefaultNivoConfiguration} />
);

export default NivoBubbleContainer;
