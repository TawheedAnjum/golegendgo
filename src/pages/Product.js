import React, { Component } from 'react';

import { Container, Grid } from "@material-ui/core";
import "../assets/css/product.css";
import ProductInfo from '../components/productDitails/ProductInfo';
import ProductImage from '../components/productDitails/ProductImage';
import SimilerProduct from '../components/similerProduct/SimilerProduct';


export class Product extends Component {
    state = {
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    }
    render() {
        return (
          <Container maxWidth="lg" className="productRoot">
            <Grid container spacing={3}>
              <Grid item md={5} xs={12}>
                <ProductImage images={this.state.images} />
              </Grid>
              <Grid item md={7} xs={12}>
                <ProductInfo />
              </Grid>
            </Grid>
            {/* similer product */}
            <SimilerProduct />
            {/* similer product finish */}
          </Container>
        ); 
    }
}

export default Product
