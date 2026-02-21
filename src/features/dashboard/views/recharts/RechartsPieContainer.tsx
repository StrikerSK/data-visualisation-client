import PieChartYearly from '../../../charts/recharts/PieChartYearly';
import React from 'react';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const RechartsPieContainer: React.FC = () => (
  <GraphComponent graph={<PieChartYearly />} configs={DefaultConfiguration} />
);

export default RechartsPieContainer;
