import React from 'react';
import ApexPieChart from '../../components/apex/ApexPieChart';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexPieContainer: React.FC = () => (
  <GraphComponent graph={<ApexPieChart />} configs={DefaultConfiguration} />
);

export default ApexPieContainer;
