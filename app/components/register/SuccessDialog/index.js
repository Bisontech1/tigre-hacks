import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import "./index.css";

const SuccessDialog = (props) => {
  const { open, setOpen, title, message, route = "/" } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="dialog">
      <Fade in={open}>
        <div className="success-dialog">
          <div className="success-title">
            <div className="success-icon">
              <CheckIcon sx={{ fontSize: 30 }} />
            </div>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              {title}
            </Typography>
          </div>
          <div className="content">
            <Typography
              className="message"
              variant="h6"
              sx={{ color: "#424242" }}
            >
              {message}
            </Typography>

            <Button
              onClick={() => {
                handleClose();
              }}
              href={route}
              variant="contained"
              color="primary"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </Fade>
    </Dialog>
  );
};

export default SuccessDialog;
