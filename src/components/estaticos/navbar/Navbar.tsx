import React from 'react'
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <AppBar className='barra' position="static">
                <Toolbar className='barra' variant="regular">
                    <Box className="cursor">
                    <Box mx={1} className="cursor">
                        
                     
                    </Box>
                    </Box>

                    <Box width='100%' display="flex" justifyContent="space-between">
                        <Box display="flex">
                        <Box mx={1} className="cursor">
                        <Typography variant="h6" color="initial">
                                    Home
                                </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Plantas
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Adubos
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Dicas
                            </Typography>
                        </Box>
                        </Box>
                        <Box mx={2} className="botoes">
                            <Button variant="outlined" color="inherit" >
                                    Login
                            </Button>
                            <Button variant="outlined" color="inherit">
                                    Cadastre-se
                            </Button>
                            
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar