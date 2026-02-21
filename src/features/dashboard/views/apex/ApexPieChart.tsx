import React from 'react';
import ApexPieChart from '../../../charts/apex/ApexPieChart';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexPieContainer: React.FC = () => (
  <GraphComponent graph={<ApexPieChart />} configs={DefaultConfiguration} />
);

export default ApexPieContainer;
