import React from 'react';
import BarChartComponent from '../../../charts/recharts/BarChartComponent';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const RechartsBarContainer: React.FC = () => (
  <GraphComponent graph={<BarChartComponent />} configs={DefaultConfiguration} />
);

export default RechartsBarContainer;
