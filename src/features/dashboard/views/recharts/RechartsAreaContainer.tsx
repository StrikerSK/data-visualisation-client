import React from 'react';
import AreaChartComponent from '../../../charts/recharts/AreaChartComponent';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const RechartsAreaContainer: React.FC = () => (
  <GraphComponent graph={<AreaChartComponent />} configs={DefaultConfiguration} />
);

export default RechartsAreaContainer;
