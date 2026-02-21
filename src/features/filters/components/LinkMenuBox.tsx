import React from 'react';
import MenuListComposition from './MenuListComposition';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';

export interface MenuItem {
  name: string;
  link: string;
}

export const rechartsItems: MenuItem[] = [
  { name: 'Stĺpcový graf', link: '/recharts/bar' },
  { name: 'Koláčový graf', link: '/recharts/pie' },
  { name: 'Línový graf', link: '/recharts/line' },
  { name: 'Plošný graf', link: '/recharts/area' },
  { name: 'Dashboard', link: '/recharts' },
];

export const nivoItems: MenuItem[] = [
  { name: 'Stĺpcový graf', link: '/nivo/bar' },
  { name: 'Koláčový graf', link: '/nivo/pie' },
  { name: 'Línový graf', link: '/nivo/line' },
  { name: 'Bublinový graf', link: '/nivo/bubble' },
  { name: 'Oblátkový graf', link: '/nivo/waffle' },
  { name: 'Dashboard', link: '/nivo' },
];

export const apexItems: MenuItem[] = [
  { name: 'Stĺpcový graf', link: '/apex/bar' },
  { name: 'Koláčový graf', link: '/apex/pie' },
  { name: 'Línový graf', link: '/apex/line' },
  { name: 'Radarový graf', link: '/apex/radar' },
  { name: 'Plošný graf', link: '/apex/area' },
  { name: 'Radiálny graf', link: '/apex/radial' },
  { name: 'Heatmap', link: '/apex/heatmap' },
  { name: 'Dashboard', link: '/apex' },
];

const LinkMenuBox: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="link-menu-container">
      <MenuListComposition name={'Recharts'} items={rechartsItems} />
      <MenuListComposition name={'Nivo'} items={nivoItems} />
      <MenuListComposition name={'Apex'} items={apexItems} />
      <div className="menu-list">
        <Button
          className="menu-list_button"
          aria-controls="simple-menu"
          onClick={handleClick}
          disabled={location.pathname === '/'}
        >
          Úvod
        </Button>
      </div>
    </div>
  );
};

export default LinkMenuBox;
