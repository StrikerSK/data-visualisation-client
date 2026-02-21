import React from 'react';
import GraphComponent from '../../components/layout/GraphComponent';
import NivoStreamComponent from '../../components/nivo/NivoStreamComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';

const NivoStreamContainer: React.FC = () => (
  <GraphComponent graph={<NivoStreamComponent />} configs={DefaultNivoConfiguration} />
);

export default NivoStreamContainer;
