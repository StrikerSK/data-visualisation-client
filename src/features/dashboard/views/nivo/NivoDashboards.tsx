import React, { ReactNode } from 'react';
import NivoPieComponent from '../../../charts/nivo/NivoPieComponent';
import NivoBarComponent from '../../../charts/nivo/NivoBarComponent';
import NivoLineComponent from '../../../charts/nivo/NivoLineComponent';
import NivoBubbleComponent from '../../../charts/nivo/NivoBubbleComponent';
import DashboardLayout from '../../components/DashboardLayout';

const componentArray: ReactNode[] = [
  <NivoLineComponent key="line" />,
  <NivoBarComponent key="bar" />,
  <NivoPieComponent key="pie" />,
  <NivoBubbleComponent key="bubble" />,
];

export const NivoDashboards: React.FC = () => {
  const displayComponents = componentArray as [ReactNode, ReactNode, ReactNode, ReactNode];
  return <DashboardLayout>{displayComponents}</DashboardLayout>;
};

export const NivoDashboardsRandom: React.FC = () => {
  const shuffled = [...componentArray].sort(() => Math.random() - 0.5);
  const displayComponents = shuffled as [ReactNode, ReactNode, ReactNode, ReactNode];
  return <DashboardLayout>{displayComponents}</DashboardLayout>;
};
