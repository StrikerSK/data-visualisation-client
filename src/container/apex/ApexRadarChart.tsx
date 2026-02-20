import React from 'react';
import ApexRadarChart from '../../components/apex/ApexRadarChart';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexRadarContainer: React.FC = () => (
  <GraphComponent graph={<ApexRadarChart />} configs={DefaultConfiguration} />
);

export default ApexRadarContainer;
