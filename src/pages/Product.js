import React, { Component } from 'react';

import { Container, Grid } from "@material-ui/core";
import "../assets/css/product.css";
import ProductInfo from '../components/productDitails/ProductInfo';
import ProductImage from '../components/productDitails/ProductImage';


export class Product extends Component {
    render() {
        return (
          <Container maxWidth="lg" className="productRoot">
            <Grid container spacing={3}>
              <Grid item md={5} xs={12}>
                <ProductImage />
              </Grid>
              <Grid item md={7} xs={12}>
                <ProductInfo />
              </Grid>
            </Grid>
          </Container>
        ); 
    }
}

export default Product
