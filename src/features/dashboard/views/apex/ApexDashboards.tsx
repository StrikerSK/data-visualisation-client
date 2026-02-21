import React, { ReactNode } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import ApexBarChart from '../../../charts/apex/ApexBarChart';
import ApexLineChart from '../../../charts/apex/ApexLineChart';
import ApexRadialChart from '../../../charts/apex/ApexRadialChart';
import ApexPieChart from '../../../charts/apex/ApexPieChart';
import ApexHeatmapChart from '../../../charts/apex/ApexHeatmapChart';
import ApexAreaChart from '../../../charts/apex/ApexAreaChart';
import ApexRadarChart from '../../../charts/apex/ApexRadarChart';

const componentArray: ReactNode[] = [
  <ApexBarChart key="bar" />,
  <ApexLineChart key="line" />,
  <ApexRadialChart key="radial" />,
  <ApexPieChart key="pie" />,
  <ApexHeatmapChart key="heatmap" />,
  <ApexAreaChart key="area" />,
  <ApexRadarChart key="radar" />,
];

export const ApexDashboards: React.FC = () => {
  const displayComponents = componentArray.slice(0, 4) as [ReactNode, ReactNode, ReactNode, ReactNode];
  return <DashboardLayout>{displayComponents}</DashboardLayout>;
};

export const ApexDashboardsRandom: React.FC = () => {
  const shuffled = [...componentArray].sort(() => Math.random() - 0.5);
  const displayComponents = shuffled.slice(0, 4) as [ReactNode, ReactNode, ReactNode, ReactNode];
  return <DashboardLayout>{displayComponents}</DashboardLayout>;
};
