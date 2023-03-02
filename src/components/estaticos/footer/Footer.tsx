import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    
<>
  <hr/>
    <Grid container>
        
        <Grid xs={2}>
            <h1>Equipe</h1>
        <p className='nomes' >Christian</p>
        <p className='nomes'>Leoanardo</p>
        <p className='nomes'>Marcelo</p>
        <p className='nomes'>Miguel</p>
        <p className='nomes'>Otavio</p>


    </Grid>
        <Grid xs={2} >
            <h1 className=''>Github</h1>
            <p className='nomes'>BackEnd</p>
            <p className='nomes'>FrontEnd</p>
        </Grid>

        <Grid>
            <h1>Sobre nós</h1>

        </Grid>

    </Grid >
    
    </>
    

    

 
   
  )
}

export default Footer