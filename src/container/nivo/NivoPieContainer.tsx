import React from 'react';
import NivoPieComponent from '../../components/nivo/NivoPieComponent';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';

const NivoPieContainer: React.FC = () => (
  <GraphComponent graph={<NivoPieComponent />} configs={DefaultNivoConfiguration} />
);

export default NivoPieContainer;
