import React, { ReactNode } from 'react';
import GraphComponent from '../../components/GraphComponent';
import NivoBarComponent from '../../../charts/nivo/NivoBarComponent';
import SelectBarLayout from '../../../filters/components/SelectBarLayout';
import SelectGroupLayout from '../../../filters/components/SelectGroupLayout';
import { DefaultNivoConfiguration } from './AbstractNivo';

const ComponentConfigurations: ReactNode[] = [
  ...DefaultNivoConfiguration,
  <SelectGroupLayout key="group" />,
  <SelectBarLayout key="layout" />,
];

const NivoBarContainer: React.FC = () => (
  <GraphComponent graph={<NivoBarComponent />} configs={ComponentConfigurations} />
);

export default NivoBarContainer;
