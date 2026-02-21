import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

interface MenuItem {
  name: string;
  link: string;
}

interface MenuListCompositionProps {
  name: string;
  items: MenuItem[];
}

const MenuListComposition: React.FC<MenuListCompositionProps> = ({ name, items }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLinkClick = (linkTo: string) => {
    navigate(linkTo);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-list">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifySelf: 'center',
        }}
      >
        {name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item, key) => {
          return (
            <MenuItem
              key={key}
              onClick={() => handleLinkClick(item.link)}
              selected={window.location.pathname === item.link}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default MenuListComposition;
