import React, { useState } from "react";

import { Button, Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/ProductStyle";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShopIcon from "@material-ui/icons/Shop";

import { SideBySideMagnifier } from "react-image-magnifiers";

function ProductImage(props) {
  const classes = useStyles(props);

  const [activeImage, setActiveImage] = useState(props.images[0]);

  const imageChangeHandaler = (img) => {
    setActiveImage(img);
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item md={2} xs={12}>
          <Grid container spacing={2}>
            {props.images.map((i) => {
              return (
                <Grid
                  item
                  xs={3}
                  md={12}
                  key={i}
                  onClick={() => {
                    imageChangeHandaler(i);
                  }}
                >
                  <Card className={classes.card} variant="outlined">
                    <CardActionArea>
                      <CardMedia image={`./images/product/${i}`} title="Contemplative Reptile" className={classes.media} />
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item md={10} xs={12}>
          <SideBySideMagnifier
            imageSrc={`./images/product/${activeImage}`}
            imageAlt="Example"
            fillAvailableSpace={true}
            largeImageSrc={`./images/product/${activeImage}`}
            className={classes.largeimage}
            fillGapLeft={10}
            fillGapRight={15}
            fillGapBottom={15}
          />
          <Grid container spacing={2}>
            <Grid item md={6} xs={6}>
              <Button variant="contained" disableElevation className={classes.addbtn} startIcon={<ShoppingCartIcon />}>
                GO TO CART
              </Button>
            </Grid>
            <Grid item md={6} xs={6}>
              <Button variant="contained" disableElevation className={classes.buybtn} startIcon={<ShopIcon />}>
                BUY NOW
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductImage;
