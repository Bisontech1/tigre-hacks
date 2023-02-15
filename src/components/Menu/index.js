import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Instagram, Twitter, Facebook, NightsStay } from '@mui/icons-material';


export default function NavMenu() {

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar sx={{ backgroundColor: '#ffffff' }}>
          <img src='./assets/logo.png' alt="Logo" style={{ maxWidth: 160, marginRight: 2 }} />
          <div style={{ flexGrow: 1 }} />
          <IconButton color="#000000" aria-label="instagram" >
            <Instagram />
          </IconButton>
          <IconButton color="#000000" aria-label="twitter">
            <Twitter />
          </IconButton>
          <IconButton color="#000000" aria-label="facebook">
            <Facebook />
          </IconButton>
          <IconButton color="#000000" aria-label="dark theme">
            <NightsStay />
          </IconButton>
          <a
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
          >
            <img
            style={{width:'100px', display:'block'}}
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
            />
          </a>



        </Toolbar>
      </AppBar>
    </div>
  );
}




