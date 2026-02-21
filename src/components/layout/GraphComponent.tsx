import React, { ReactNode } from 'react';
import GraphHeader from './GraphHeader';
import GraphBody from './GraphBody';

interface GraphComponentProps {
  graph: ReactNode;
  configs: ReactNode;
}

const GraphComponent: React.FC<GraphComponentProps> = ({ graph, configs }) => {
  return (
    <div className="graph-container">
      <GraphHeader />
      <GraphBody graph={graph} configs={configs} />
    </div>
  );
};

export default GraphComponent;
