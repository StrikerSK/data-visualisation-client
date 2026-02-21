import React from 'react';
import NivoLineComponent from '../../components/nivo/NivoLineComponent';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';

const NivoLineContainer: React.FC = () => (
  <GraphComponent graph={<NivoLineComponent />} configs={DefaultNivoConfiguration} />
);

export default NivoLineContainer;
