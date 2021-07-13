import React, { Component } from 'react';

import { Container, Grid } from "@material-ui/core";
import "../assets/css/product.css";
import ProductInfo from '../components/productDitails/ProductInfo';
import ProductImage from '../components/productDitails/ProductImage';
import SimilerProduct from '../components/similerProduct/SimilerProduct';


export class Product extends Component {
    state = {
      productInfo: {
        productTitle: 'IWS 104 TC Cotton Double Printed Bedsheet (Pack of 1, Green)#JustHere',
        totalRating: 3.5,
        totalRatingNumber: '82,508',
        totalReviewNumber: '8,103',
        recentPrice: '249',
        oldPrice: '1,244',
        discount: '82', 
        description:'We offers to you a range of home furnishing products from the house of IWS. IWS is a leading home furnishing brand of the country. This beautiful bed sheet will not only add a dash of colour and vibrancy to your home but also will fetch admiration and compliments. Bring home this beautiful bed sheet from the house of IWS today and get ready to mesmerise one and all.'
      },
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
                <ProductInfo productInfo={this.state.productInfo} />
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
