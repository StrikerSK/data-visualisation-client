import React from 'react';
import ApexAreaChart from '../../components/apex/ApexAreaChart';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexAreaContainer: React.FC = () => (
  <GraphComponent graph={<ApexAreaChart />} configs={DefaultConfiguration} />
);

export default ApexAreaContainer;
