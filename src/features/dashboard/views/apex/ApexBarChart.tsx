import React, { ReactNode } from 'react';
import ApexBarChart from '../../../charts/apex/ApexBarChart';
import GraphComponent from '../../components/GraphComponent';
import SelectGroupLayout from '../../../filters/components/SelectGroupLayout';
import SelectBarLayout from '../../../filters/components/SelectBarLayout';
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
