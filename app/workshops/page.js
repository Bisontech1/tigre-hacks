"use client";

import React from "react";
import Video from "../components/workshops/Video";
import data from "../../public/videos/video.json";
import Nav from "components/landing/Nav";
import { Box, Grid, Typography } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const App = () => {
  return (
    <Box>
      <style jsx global>{`
        * {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Box sx={{ marginBottom: 20, cursor: "url(/public/videos/dog.png)" }}>
        <Nav />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTypography-root": { textAlign: "center", width: "80%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "600" }}>
            Workshops
          </Typography>
          <img
            alt=""
            src="/videos/its.png"
            style={{ width: "60px", objectFit: "contain", marginLeft: "20px" }}
          />
        </Box>
        <Typography variant="h5">
          It&apos;s dangerous to go alone take this!
        </Typography>
        <Typography variant="h6">
          Ya seas el hacker más malevolo y norteño del condado o eres solo un
          compita que quiere ver que onda con el hackathon y aprender un rato,
          este lugar es para ti
        </Typography>
      </Box>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        {data.map((item) => {
          return (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="row"
              key={item.name}
              item
            >
              <Video
                thumbnail={item.src}
                title={item.name}
                description={item.description}
                categoryColor={item.color}
                videoId={item.url ?? "dQw4w9WgXcQ"}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default App;
