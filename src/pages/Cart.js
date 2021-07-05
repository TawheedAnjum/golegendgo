import React from 'react';
import { Container, Grid } from "@material-ui/core";
import AllCartItems from "../components/cart/AllCartItems";
import PriceDetails from '../components/cart/PriceDetails';

function Cart() {
    return (
      <div
        style={{ backgroundColor: "#f1f3f6", height: "100vh", width: "100vw" }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              <AllCartItems />
            </Grid>
            <Grid item md={4} xs={12}>
              <PriceDetails />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default Cart
