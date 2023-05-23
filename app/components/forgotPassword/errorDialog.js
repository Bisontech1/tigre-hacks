import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./index-error.css";

const EmailErrorDialog = (props) => {
  const { open, setOpen, title, message } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="dialog">
      <Fade in={open}>
        <div className="error-dialog">
          <div className="error-title">
            <div className="error-icon">
              <CloseIcon sx={{ fontSize: 30 }} />
            </div>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              {title}
            </Typography>
          </div>
          <div className="content">
            <Typography
              className="message"
              variant="body1"
              sx={{ color: "#424242" }}
            >
              {message}
            </Typography>

            <Button variant="contained" color="primary" onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        </div>
      </Fade>
    </Dialog>
  );
};

export default EmailErrorDialog;
