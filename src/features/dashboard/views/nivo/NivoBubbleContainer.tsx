import React from 'react';
import NivoBubbleComponent from '../../../charts/nivo/NivoBubbleComponent';
import GraphComponent from '../../components/GraphComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';

const NivoBubbleContainer: React.FC = () => (
  <GraphComponent graph={<NivoBubbleComponent />} configs={DefaultNivoConfiguration} />
);

export default NivoBubbleContainer;
