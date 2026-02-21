import React, { ReactNode } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import GeneralHeader from './GeneralHeader';
import MenuListComposition from '../../filters/components/MenuListComposition';
import { rechartsItems, nivoItems, apexItems } from '../constants';

interface MainNavigationHeaderProps {
  actions?: ReactNode;
}

const MainNavigationHeader: React.FC<MainNavigationHeaderProps> = ({ actions }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => navigate('/');

  return (
    <GeneralHeader>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Typography
          variant="h2"
          onClick={goHome}
          sx={{
            fontSize: '1.5rem',
            m: 0,
            color: 'primary.main',
            cursor: 'pointer',
            fontWeight: 700,
            '&:hover': { opacity: 0.8 },
          }}
        >
          PID Graphs
        </Typography>

        <Box component="nav" sx={{ display: 'flex', gap: 1 }}>
          <MenuListComposition name={'Recharts'} items={rechartsItems} />
          <MenuListComposition name={'Nivo'} items={nivoItems} />
          <MenuListComposition name={'Apex'} items={apexItems} />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        {actions}
        {location.pathname !== '/' && (
          <Button
            variant="outlined"
            size="small"
            onClick={goHome}
            sx={{ fontWeight: 600 }}
          >
            Úvod
          </Button>
        )}
      </Box>
    </GeneralHeader>
  );
};

export default MainNavigationHeader;
