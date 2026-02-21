import React, { ReactNode } from 'react';
import NivoPieComponent from '../../components/nivo/NivoPieComponent';
import NivoBarComponent from '../../components/nivo/NivoBarComponent';
import NivoLineComponent from '../../components/nivo/NivoLineComponent';
import NivoBubbleComponent from '../../components/nivo/NivoBubbleComponent';
import DashboardLayout from '../../components/layout/DashboardLayout';

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
