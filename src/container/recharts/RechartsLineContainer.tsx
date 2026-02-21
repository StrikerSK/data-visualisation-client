import LineGraphComponent from '../../components/recharts/LineGraphComponent';
import React from 'react';
import GraphComponent from '../../components/layout/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const RechartsLineContainer: React.FC = () => (
  <GraphComponent graph={<LineGraphComponent />} configs={DefaultConfiguration} />
);

export default RechartsLineContainer;
