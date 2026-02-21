import React from 'react';
import ApexHeatmapChart from '../../components/apex/ApexHeatmapChart';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const ApexHeatmapContainer: React.FC = () => (
  <GraphComponent graph={<ApexHeatmapChart />} configs={DefaultConfiguration} />
);

export default ApexHeatmapContainer;
