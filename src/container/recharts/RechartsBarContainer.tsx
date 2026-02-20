import React from 'react';
import BarChartComponent from '../../components/recharts/BarChartComponent';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const RechartsBarContainer: React.FC = () => (
  <GraphComponent graph={<BarChartComponent />} configs={DefaultConfiguration} />
);

export default RechartsBarContainer;
