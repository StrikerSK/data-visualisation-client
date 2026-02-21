import React, { ReactNode } from 'react';

interface GraphBodyProps {
  graph: ReactNode;
  configs: ReactNode;
}

const GraphBody: React.FC<GraphBodyProps> = ({ graph, configs }) => {
  return (
    <div className="graph-main-box">
      <div className="graph-box">{graph}</div>
      <div className="graph-options-container">{configs}</div>
    </div>
  );
};

export default GraphBody;
