import React, { ReactNode } from 'react';
import GraphComponent from '../../components/layout/GraphComponent';
import NivoBarComponent from '../../components/nivo/NivoBarComponent';
import SelectBarLayout from '../../components/controlls/selects/SelectBarLayout';
import SelectGroupLayout from '../../components/controlls/selects/SelectGroupLayout';
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
