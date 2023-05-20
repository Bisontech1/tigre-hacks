import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import "./index.css";
import { useTranslationContext } from "contexts";

const ConfirmDialog = (props) => {
  const { open, setOpen, onConfirm } = props;

  const handleClose = () => {
    setOpen(false);
    onConfirm();
  };

  return (
    <Dialog open={open} onClose={handleClose} className="dialog">
      <Fade in={open}>
        <div className="paper">
          <Typography variant="h5" sx={{ fontWeight: "600", color: "#424242" }}>
            Confirmar Asistencia
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#000000de", "& a": { color: "orange" } }}
          >
            Al confirmar tu asistencia te comprometes a asistir al Hackathon,
            así como a cumplir con el
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
              {" "}
              código de conducta de la MLH
            </a>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#000000de" }}
          ></Typography>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Confirmar Asistencia
          </Button>
        </div>
      </Fade>
    </Dialog>
  );
};

export default ConfirmDialog;
