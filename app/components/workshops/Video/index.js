import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import YouTube from "react-youtube";

const Video = (props) => {
  const { thumbnail, title, description, videoId, categoryColor } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          width: ["100%", 500],
          height: 450,
          m: [5,10],
          borderRadius: 5,
        }}
      >
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            alt={title}
            height="250"
            image={thumbnail}
            title={title}
            sx={{ borderRadius: "5px 5px 0px 0px" }}
          />
          <CardContent>
            <Typography
              variant="subtitle2"
              sx={{
                backgroundColor: categoryColor,
                color: "#fff",
                border: 0,
                borderRadius: 50,
                width: 100,
                textAlign: "center",
                marginBottom: 1,
              }}
            >
              Principiante
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "500" }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.slice(0, 200) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            width: "80%",
            maxWidth: "none",
            height: "600px",
          },
        }}
      >
        <YouTube videoId={videoId} opts={{ width: "100%", height: "450px" }} />
        <Typography variant="body1" color="text.secondary" sx={{ p: 2 }}>
          {description}
        </Typography>
      </Dialog>
    </>
  );
};

export default Video;
