import React from 'react';
import ApexRadialChart from '../../components/apex/ApexRadialChart';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexRadialContainer: React.FC = () => (
  <GraphComponent graph={<ApexRadialChart />} configs={DefaultConfiguration} />
);

export default ApexRadialContainer;
