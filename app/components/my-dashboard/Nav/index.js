import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Navbar() {
    const Links = [
        { name: 'Inicio', href: '/dashboard/my-dashboard' },
        { name: 'Mi Perfil', href: '/dashboard/my-dashboard/myprofile' },
        { name: 'Mi Equipo', href: '/dashboard/my-dashboard/myteam' },
        { name: 'Mi Estado', href: '/dashboard/my-dashboard/mystate' },
        { name: 'Horario', href: '/dashboard/my-dashboard/schedule' },
        { name: 'Talleres', href: '/workshops' },
        

    ]
    return (
        <div>
            <AppBar position="static" sx={{boxShadow:'none', borderBottom:'solid 1px #ebebeb'}}>
                <Toolbar sx={{ backgroundColor: '#FFFFFF', height:'100px'}}>
                    <img
                        src="/logo.png"
                        alt="Logo"
                        sx={{
                            mr: 1,
                            height: "32px",
                            "@media (max-width: 600px)": {
                                height: "28px",
                            },
                        }}
                    />
                    <Box sx={{ 
                        marginLeft:'40px',
                        '& .MuiLink-root': { color: '#000', mx: 1 }, 
                        '& .MuiLink-root:hover': { color: 'orange' } }}>
                        {Links.map((element,index) => {
                            return (
                                <>
                                <Link variant="subtitle1" href={element.href} underline="none" key={index}>
                                    {element.name}
                                </Link>
                                </>
                                
                            )
                        })}
                    </Box>
                    <Button
                        color="inherit"
                        endIcon={<ExitToAppIcon />}
                        sx={{
                            "@media (max-width: 600px)": {
                                fontSize: "0.75rem",
                            },
                        }}
                    >
                        Exit
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;