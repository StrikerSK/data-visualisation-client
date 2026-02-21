import React from 'react';
import ApexHeatmapChart from '../../../charts/apex/ApexHeatmapChart';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexHeatmapContainer: React.FC = () => (
  <GraphComponent graph={<ApexHeatmapChart />} configs={DefaultConfiguration} />
);

export default ApexHeatmapContainer;
