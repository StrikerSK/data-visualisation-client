import React from 'react';
import ApexRadarChart from '../../../charts/apex/ApexRadarChart';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexRadarContainer: React.FC = () => (
  <GraphComponent graph={<ApexRadarChart />} configs={DefaultConfiguration} />
);

export default ApexRadarContainer;
