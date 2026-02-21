import React from 'react';
import GraphComponent from '../../components/GraphComponent';
import NivoStreamComponent from '../../../charts/nivo/NivoStreamComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';

const NivoStreamContainer: React.FC = () => (
  <GraphComponent graph={<NivoStreamComponent />} configs={DefaultNivoConfiguration} />
);

export default NivoStreamContainer;
