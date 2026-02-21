import React from 'react';
import NivoPieComponent from '../../../charts/nivo/NivoPieComponent';
import GraphComponent from '../../components/GraphComponent';
import { DefaultNivoConfiguration } from './AbstractNivo';

const NivoPieContainer: React.FC = () => (
  <GraphComponent graph={<NivoPieComponent />} configs={DefaultNivoConfiguration} />
);

export default NivoPieContainer;
