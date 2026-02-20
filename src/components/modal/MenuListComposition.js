import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PropTypes from 'prop-types';

const MenuListComposition = ({ name, items }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLinkClick = (linkTo) => {
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

MenuListComposition.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuListComposition;
