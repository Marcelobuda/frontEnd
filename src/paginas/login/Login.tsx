import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import useLocalStorage from "react-use-localstorage";
import UsuarioLogin from "../../models/UsuarioLogin";
import { login } from "../../service/Service";

function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage("token");
    const [userLogin, setUserLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        cpf: "",
        senha: "",
        token: "",
    });

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    }
    useEffect(() => {
        if (token != "") {
            navigate("/home");
        }
    }, [token]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken);

            alert("Usuário logado com sucesso!");
        } catch (error) {
            alert("Dados do usuário inconsistentes. Erro ao logar!");
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
                            component="h3"
                            align="center"
                            className="entrar"
                        >
                            Entrar
                        </Typography>
                        <TextField
                            value={userLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            id="usuario"
                            label="usuário"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            id="senha"
                            label="senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                                <Button
                                    className="botao1"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">
                                Ainda não é cadastrado?
                            </Typography>
                        </Box>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="center"
                            className="txts"
                        >
                            {" "}
                            <Link to="/cadastro" className="text-decorator-none">
                            Cadastre-se
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="img"></Grid>
        </Grid>
    );
}

export default Login;
