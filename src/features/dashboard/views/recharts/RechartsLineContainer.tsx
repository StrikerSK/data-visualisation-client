import LineGraphComponent from '../../../charts/recharts/LineGraphComponent';
import React from 'react';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const RechartsLineContainer: React.FC = () => (
  <GraphComponent graph={<LineGraphComponent />} configs={DefaultConfiguration} />
);

export default RechartsLineContainer;
