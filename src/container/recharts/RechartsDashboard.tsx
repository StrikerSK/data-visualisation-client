import React, { ReactNode } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import BarChartComponent from '../../components/recharts/BarChartComponent';
import LineGraphComponent from '../../components/recharts/LineGraphComponent';
import StackedGraphComponent from '../../components/recharts/StackedGraphComponent';
import AreaChartComponent from '../../components/recharts/AreaChartComponent';
import PieChartYearly from '../../components/recharts/PieChartYearly';

const componentsArray: ReactNode[] = [
  <BarChartComponent key="bar" />,
  <LineGraphComponent key="line" />,
  <StackedGraphComponent key="stacked" />,
  <AreaChartComponent key="area" />,
  <PieChartYearly key="pie" />,
];

export const RechartsDashboard: React.FC = () => {
  // DashboardLayout expects exactly 4 children in its type definition
  const displayComponents = componentsArray.slice(0, 4) as [
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode,
  ];
  return <DashboardLayout>{displayComponents}</DashboardLayout>;
};

export const RechartsDashboardRandom: React.FC = () => {
  const shuffled = [...componentsArray].sort(() => Math.random() - 0.5);
  const displayComponents = shuffled.slice(0, 4) as [ReactNode, ReactNode, ReactNode, ReactNode];
  return <DashboardLayout>{displayComponents}</DashboardLayout>;
};
