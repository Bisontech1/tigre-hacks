import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import "./index.css";
import { useTranslationContext } from "contexts";

const WelcomeDialog = () => {
  const { language, setLanguage } = useTranslationContext();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="dialog">
      <Fade in={open}>
        <div className="paper">
          <Typography variant="h5" sx={{ fontWeight: "600", color: "#424242" }}>
            {language?.getString("register.welcome.title")}
          </Typography>
          <Typography variant="h6" sx={{ color: "#424242" }}>
            {language?.getString("register.welcome.subtitle")}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#000000de" }}>
            {language?.getString("register.welcome.description1")}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#000000de" }}>
            {language?.getString("register.welcome.description2")}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClose}>
            {language?.getString("register.welcome.start")}
          </Button>
        </div>
      </Fade>
    </Dialog>
  );
};

export default WelcomeDialog;
