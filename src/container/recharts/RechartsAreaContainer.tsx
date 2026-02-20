import React from 'react';
import AreaChartComponent from '../../components/recharts/AreaChartComponent';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const RechartsAreaContainer: React.FC = () => (
  <GraphComponent graph={<AreaChartComponent />} configs={DefaultConfiguration} />
);

export default RechartsAreaContainer;
