import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import "./TabProdutos.css";
import ListaPostagens from "../listaProdutos/ListaProdutos";
import Carousel from "../listaProdutos/Carousel";

function TabProdutos() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <> 
      <TabContext value={value}>
        <AppBar className="painel1" position="static">
          <Tabs centered onChange={handleChange} >
            <Tab label="Produtos" value="1" className="painel2"/>
            <Tab label="Projeto" value="2" className="painel2"/>
          </Tabs>
        </AppBar>
        <TabPanel className="painel" value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="start">
            <Carousel />
          </Box>
        </TabPanel>
        <TabPanel className="painel" value="2">
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre o Projeto
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
            className="projeto"
          >
            O Projeto VidaPlan, foi elaborado visando a diminuição da barreira
            de entrada de novos agricultores, e a facilitação para agricultores
            iniciantes.
            <br />
            Nós da VidaPlan, visamos focar em aumentar o conhecimento e dar
            algumas dicas valiosas para quem ainda é inexperiente no ramo, e até
            mesmo facilitar o acesso do agricultor aos nossos produtos.
            <img src="https://imgur.com/7qUrrF6.png" alt="" width='350px' height='300px'/>
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProdutos;
