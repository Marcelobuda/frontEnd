import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/Action";
import { toast } from "react-toastify";
import { TokenState } from "../../../store/tokens/TokensReducer";

function Navbar() {
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(""));
    toast.success("Usuário deslogado", {
      theme: "colored",
    });

    navigate("/login");
  }

  return (
    <>
      <AppBar className="barra" position="static">
        <Toolbar className="barra" variant="regular">
          <Box className="cursor">
            <Box mx={1} className="cursor"></Box>
          </Box>

          <Box width="100%" display="flex" justifyContent="space-between">
            <Box display="flex">
              <Box mx={1} className="cursor">
                <Link to="/home" className="text-decorator-none1">
                  <Typography variant="h6" color="initial">
                    Home
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to="/categorias" className="text-decorator-none1">
                  <Typography variant="h6" color="inherit">
                    Categorias
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to="/produtos" className="text-decorator-none1">
                  <Typography variant="h6" color="inherit">
                    Produtos
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Dicas de pantação
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Sobre nós
                </Typography>
              </Box>
              <Box mx={1} className="cursor" onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Box>
            <Box mx={2} display="flex" gap={2}>
              <Link to="/login" className="text-decorator-none1">
                <Button variant="outlined" color="inherit">
                  Login
                </Button>
              </Link>
              <Link to="/cadastro" className="text-decorator-none1">
                <Button variant="outlined" color="inherit">
                  Cadastre-se
                </Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
