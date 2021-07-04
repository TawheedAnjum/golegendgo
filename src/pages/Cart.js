import React from 'react';
import { Container, Grid } from "@material-ui/core";
import CartItem from '../components/cart/CartItem';

function Cart() {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item md={9} xs={12}><CartItem /></Grid>
          <Grid item md={3} xs={12}>Product Price</Grid>
        </Grid>
      </Container>
    );
}

export default Cart
