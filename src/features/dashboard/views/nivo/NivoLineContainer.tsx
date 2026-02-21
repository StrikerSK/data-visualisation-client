import React from 'react';
import NivoLineComponent from '../../../charts/nivo/NivoLineComponent';
import GraphComponent from '../../components/GraphComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';

const NivoLineContainer: React.FC = () => (
  <GraphComponent graph={<NivoLineComponent />} configs={DefaultNivoConfiguration} />
);

export default NivoLineContainer;
