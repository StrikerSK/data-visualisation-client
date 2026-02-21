import React from 'react';
import ApexAreaChart from '../../../charts/apex/ApexAreaChart';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexAreaContainer: React.FC = () => (
  <GraphComponent graph={<ApexAreaChart />} configs={DefaultConfiguration} />
);

export default ApexAreaContainer;
