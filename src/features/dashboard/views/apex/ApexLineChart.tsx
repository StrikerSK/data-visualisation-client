import React from 'react';
import ApexLineChart from '../../../charts/apex/ApexLineChart';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexLineContainer: React.FC = () => (
  <GraphComponent graph={<ApexLineChart />} configs={DefaultConfiguration} />
);

export default ApexLineContainer;
