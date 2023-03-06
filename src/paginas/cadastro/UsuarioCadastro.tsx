import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./UsuarioCadastro.css";
import Usuario from '../../models/Usuario';
import useLocalStorage from 'react-use-localstorage';
import { cadastroUsuario } from "../../service/Service";
import UsuarioLogin from "../../models/UsuarioLogin";

function UsuarioCadastro() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        cpf: "",
        senha: "",
    })
    const [userResult, setUserResult] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        cpf: "",
        senha: "",
    })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={7} alignItems="center">
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
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
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="none"
                            fullWidth
                        />
                        <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            type="email"
                            label="E-mail"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            value={user.cpf}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="cpf"
                            label="CPF"
                            variant="outlined"
                            name="cpf"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />
                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confimSenha"
                            label="Confirmação de senha"
                            variant="outlined"
                            name="confimSenha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                                <Button className='botao1' type="submit" variant="contained" color="primary">
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='img'>
            </Grid>
        </Grid>
    );
}

export default UsuarioCadastro;