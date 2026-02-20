import React from 'react';
import ApexLineChart from '../../components/apex/ApexLineChart';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexLineContainer: React.FC = () => (
  <GraphComponent graph={<ApexLineChart />} configs={DefaultConfiguration} />
);

export default ApexLineContainer;
