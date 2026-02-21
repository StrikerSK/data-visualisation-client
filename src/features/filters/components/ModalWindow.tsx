import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CheckboxPerson from './CheckboxPerson';
import CheckboxValidity from './CheckboxValidity';
import CheckboxMonths from './CheckboxMonths';
import CheckboxSellType from './CheckboxSellType';
import { adaptToWidth } from '../../../shared/utils/Functions';
import SelectGroupLayout from './SelectGroupLayout';
import SelectBarLayout from './SelectBarLayout';

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: adaptToWidth('50%', '95%'),
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxHeight: '90vh',
  overflowY: 'auto',
};

const ModalWindow: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modal-button">
      <Button variant="contained" onClick={handleOpen} color="primary" sx={{ m: 1 }}>
        Filter
      </Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SelectBarLayout />
            <SelectGroupLayout />
          </Box>
          <CheckboxPerson />
          <CheckboxValidity />
          <CheckboxMonths />
          <CheckboxSellType />
          <Button variant="contained" onClick={handleClose} color="primary" sx={{ m: 1, width: '30%' }}>
            Zavri okno
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;
