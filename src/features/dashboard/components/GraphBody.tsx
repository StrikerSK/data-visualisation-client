import React, { ReactNode } from 'react';
import { Grid, Paper, Box } from '@mui/material';
import SpinnerComponent from '../../../shared/components/SpinnerComponent';

interface GraphBodyProps {
  graph: ReactNode;
  configs: ReactNode;
  isLoaded: boolean;
}

const GraphBody: React.FC<GraphBodyProps> = ({ graph, configs, isLoaded }) => {
  return (
    <SpinnerComponent isDataLoaded={isLoaded}>
      <Box sx={{ flex: 1, display: 'flex', p: 3, height: '100%', minHeight: 0, width: '100%' }}>
        <Grid container spacing={3} sx={{ flex: 1, height: '100%', width: '100%' }}>
          <Grid
            size={{ xs: 12, md: 9 }}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <Box component="section" aria-label="Chart Visualization" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  minHeight: 0,
                }}
              >
                <Box sx={{ flex: 1, position: 'relative', height: '100%', width: '100%' }}>
                  {graph}
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <Box component="section" aria-label="Chart Controls" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  p: 3,
                  overflowY: 'auto',
                  borderRadius: 2,
                  minHeight: 0,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {React.Children.map(configs, (child, index) => (
                    <Box key={index}>{child}</Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </SpinnerComponent>
  );
};

export default GraphBody;
