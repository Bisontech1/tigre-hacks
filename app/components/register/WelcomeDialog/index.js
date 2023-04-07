import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import { Typography } from '@mui/material';
import './index.css'

const WelcomeDialog = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="dialog"
    >
      <Fade in={open}>
        <div className="paper">
          <Typography variant="h5" sx={{ fontWeight: '600', color: '#424242' }}>¡Bienvenido Hacker 🐯!</Typography>
          <Typography variant="h6" sx={{ color: '#424242' }}>Estamos emocionados de tenerte aquí</Typography>
          <Typography variant="subtitle1" sx={{ color: '#000000de' }}>Nos complace darte la bienvenida a nuestro hackathon y agradecemos tu interés en participar. Estamos seguros de que tendrás una experiencia única y emocionante.</Typography>
          <Typography variant="subtitle1" sx={{ color: '#000000de' }}>Antes de comenzar necesitamos registrar algunos de tus datos para tu experiencia como hacker sea la mejor.</Typography>
          <Button variant="contained" color="primary" onClick={handleClose}>Empezar</Button>
        </div>
      </Fade>
    </Dialog>
  );
};

export default WelcomeDialog;