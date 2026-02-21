import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import GraphHeader from './GraphHeader';
import GraphBody from './GraphBody';

interface GraphComponentProps {
  graph: ReactNode;
  configs: ReactNode;
  isLoaded: boolean;
}

const GraphComponent: React.FC<GraphComponentProps> = ({ graph, configs, isLoaded }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <GraphHeader />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: 0, width: '100%' }}>
        <GraphBody graph={graph} configs={configs} isLoaded={isLoaded} />
      </Box>
    </Box>
  );
};

export default GraphComponent;
