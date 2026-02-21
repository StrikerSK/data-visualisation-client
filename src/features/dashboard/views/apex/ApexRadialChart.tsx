import React from 'react';
import ApexRadialChart from '../../../charts/apex/ApexRadialChart';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexRadialContainer: React.FC = () => (
  <GraphComponent graph={<ApexRadialChart />} configs={DefaultConfiguration} />
);

export default ApexRadialContainer;
