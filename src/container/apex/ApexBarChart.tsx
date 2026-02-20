import React, { ReactNode } from 'react';
import ApexBarChart from '../../components/apex/ApexBarChart';
import GraphComponent from '../../components/layout/GraphComponent';
import SelectGroupLayout from '../../components/controlls/selects/SelectGroupLayout';
import SelectBarLayout from '../../components/controlls/selects/SelectBarLayout';
import { DefaultConfiguration } from '../AbstractCharts';

const BarConfigurations: ReactNode[] = [
  ...DefaultConfiguration,
  <SelectGroupLayout key="group" />,
  <SelectBarLayout key="layout" />,
];

const ApexBarContainer: React.FC = () => (
  <GraphComponent graph={<ApexBarChart />} configs={BarConfigurations} />
);

export default ApexBarContainer;
