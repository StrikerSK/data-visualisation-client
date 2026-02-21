import PieChartYearly from '../../components/recharts/PieChartYearly';
import React from 'react';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const RechartsPieContainer: React.FC = () => (
  <GraphComponent graph={<PieChartYearly />} configs={DefaultConfiguration} />
);

export default RechartsPieContainer;
