import Grid from '@material-ui/core/Grid'
import React, { useEffect } from "react";
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import TabProdutos from '../../components/produtos/tabProdutos/TabProdutos';
import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos';

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState['token']>(
  (state)=>state.token
);

useEffect(() => {
  if (token == "") {
    toast.warn('Você precisa estar logado', {
      theme: "colored",
  });
      navigate("/login")
  }
}, [token])

  return (

    <Grid container className='home'>
    <Grid xs={5} className='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo qui quasi iure ab, nisi amet non saepe velit numquam ipsa dolorum hic corrupti impedit iusto, necessitatibus incidunt perferendis fuga! Ducimus nesciunt quisquam, dolor blanditiis suscipit dolorum labore quod facere assumenda, ullam repellat ut voluptates cumque alias fugit provident totam, a veniam fugiat repellendus iste. Mollitia quisquam vero sit consequuntur, distinctio ipsum voluptate nulla eius sequi quo neque repudiandae maxime? Eos quis totam non suscipit minima earum nobis, tenetur illum iusto voluptatum quod ratione at aut ad unde cumque commodi recusandae eaque nihil, quos voluptatem iure aperiam est enim. Modi quis impedit
    <Grid xs={4}>
    <ModalProdutos />
    </Grid>
    </Grid>
    <Grid className='img' xs={6}>
    <img src="https://i.imgur.com/T8rGCSG.png" alt="" />
    </Grid>
      <TabProdutos />
    </Grid>

  )
}

export default Home