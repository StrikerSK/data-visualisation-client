import React, { ReactNode } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ApexBarChart from '../../components/apex/ApexBarChart';
import ApexLineChart from '../../components/apex/ApexLineChart';
import ApexRadialChart from '../../components/apex/ApexRadialChart';
import ApexPieChart from '../../components/apex/ApexPieChart';
import ApexHeatmapChart from '../../components/apex/ApexHeatmapChart';
import ApexAreaChart from '../../components/apex/ApexAreaChart';
import ApexRadarChart from '../../components/apex/ApexRadarChart';

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
  const displayComponents = componentArray.slice(0, 4) as [
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode,
  ];
  return <DashboardLayout>{displayComponents}</DashboardLayout>;
};

export const ApexDashboardsRandom: React.FC = () => {
  const shuffled = [...componentArray].sort(() => Math.random() - 0.5);
  const displayComponents = shuffled.slice(0, 4) as [ReactNode, ReactNode, ReactNode, ReactNode];
  return <DashboardLayout>{displayComponents}</DashboardLayout>;
};
