import React from 'react'
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={7} alignItems="center">
                <Box paddingX={20}>
                    <form>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h4"
                            align="center"
                            className="entrar"
                        >
                            Crie sua conta 
                        </Typography>
                        <TextField
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="none"
                            fullWidth
                        />
                        <TextField
                            id="email"
                            label="E-mail"
                            variant="outlined"
                            name="email"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />                        
                        <TextField
                            id="confimSenha"
                            label="Confirmação de senha"
                            variant="outlined"
                            name="confimSenha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" className="text-decorator-none">
                                <Button className='botao1' type="submit" variant="contained" color="primary">
                                    Cadastrar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='img'>
            </Grid>
        </Grid>
    )
}

export default Cadastro