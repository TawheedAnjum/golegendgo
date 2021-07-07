import React from 'react';
import ProductCart from './ProductCart';

import { Paper, Typography } from '@material-ui/core';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SimilerProduct() {

  const productNumber = [1,2,3,4,5];
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <Paper style={{ marginTop: "56px", padding: "2rem" }} variant="outlined">
        <Typography
          variant="h5"
          style={{ marginBottom: "1.5rem", fontWeight: "500" }}
        >
          Similer Product:
        </Typography>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
        >
          {productNumber.map(i => {
            return <ProductCart key={i} />
          })}
        </Carousel>
      </Paper>
    );
}

export default SimilerProduct
