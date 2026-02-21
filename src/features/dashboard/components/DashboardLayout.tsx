import React, { ReactNode } from 'react';
import { Container, Grid, Box } from '@mui/material';
import ModalWindow from '../../filters/components/ModalWindow';
import MainNavigationHeader from './MainNavigationHeader';

interface DashboardLayoutProps {
  children: [ReactNode, ReactNode, ReactNode, ReactNode];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <MainNavigationHeader actions={<ModalWindow />} />

      <Container maxWidth="xl" sx={{ py: 4, flexGrow: 1 }}>
        <Grid container spacing={3} sx={{ width: '100%', m: 0 }}>
          {children.map((child, index) => (
            <Grid
              key={index}
              size={{ xs: 12, lg: 6 }}
              component="section"
              aria-label={`Dashboard widget ${index + 1}`}
            >
              <Box sx={{ height: 400, bgcolor: 'background.paper', borderRadius: 2, p: 2 }}>
                {child}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardLayout;
