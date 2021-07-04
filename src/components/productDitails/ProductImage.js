import React, { useState } from "react";

import {
  makeStyles,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia
} from "@material-ui/core";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShopIcon from "@material-ui/icons/Shop";

import image1 from '../../assets/images/product/image1small.jpg';
import image2 from '../../assets/images/product/image2small.jpg';
import image3 from "../../assets/images/product/image3small.jpg";
import image1large from "../../assets/images/product/image1large.jpg";
import image2large from "../../assets/images/product/image2large.jpg";
import image3large from "../../assets/images/product/image3large.jpg";

import { SideBySideMagnifier } from "react-image-magnifiers";

const useStyles = makeStyles({
  card: {
    height: "70px",
  },
  media: {
    paddingTop: "100%", // 1:1,
  },
  addbtn: {
    marginTop: "1rem",
    width: "100%",
    height: "50px",
    backgroundColor: "#ff9f00",
    color: "white",
    "&:hover": {
      backgroundColor: "#f19603",
    },
  },
  buybtn: {
    marginTop: "1rem",
    width: "100%",
    height: "50px",
    backgroundColor: "#fb641b",
    color: "white",
    "&:hover": {
      backgroundColor: "#f0621b",
    },
  },
});

function ProductImage(props) {
    const classes = useStyles(props);

    const [imgName, setImgName] = useState(image1);
    const [largeImgName, setLargeImgName] = useState(image1large);
    
    const images = [image1, image2, image3];
    // const largeImages = [
    //   image1 = image1large,
    //   image2 = image2large,
    //   image3= image3large,
    // ];

    const imageChangeHandaler = (img) => {
      setImgName(img);
      largeImageSet(img)
    };

    const largeImageSet = (img) => {
      if(img === image1 ){
        setLargeImgName(image1large)
      }else if(img === image2){
        setLargeImgName(image2large)
      }else if(img === image3){
        setLargeImgName(image3large)
      }
    }

    return (
      <div>
        <Grid container spacing={1}>
          <Grid item md={2} xs={12}>
            <Grid container spacing={1}>
              {images.map((i) => {
                return (
                  <Grid
                    item
                    xs={3}
                    md={12}
                    key={i}
                    onClick={() => { imageChangeHandaler(i) }}
                  >
                    <Card className={classes.card} variant="outlined">
                      <CardActionArea>
                        <CardMedia
                          image={i}
                          title="Contemplative Reptile"
                          className={classes.media}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item md={10} xs={12}>
            <SideBySideMagnifier
              imageSrc={imgName}
              imageAlt="Example"
              largeImageSrc={largeImgName}
              className={classes.largeimage}
            />
            <Grid container spacing={2}>
              <Grid item md={6} xs={6}>
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.addbtn}
                  startIcon={<ShoppingCartIcon />}
                >
                  GO TO CART
                </Button>
              </Grid>
              <Grid item md={6} xs={6}>
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.buybtn}
                  startIcon={<ShopIcon />}
                >
                  BUY NOW
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}

export default ProductImage
