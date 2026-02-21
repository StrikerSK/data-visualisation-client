import StackedGraphComponent from '../../../charts/recharts/StackedGraphComponent';
import React from 'react';
import GraphComponent from '../../components/GraphComponent';
import { DefaultConfiguration } from '../AbstractCharts';

const RechartsStackedContainer: React.FC = () => (
  <GraphComponent graph={<StackedGraphComponent />} configs={DefaultConfiguration} />
);

export default RechartsStackedContainer;
