import React from "react";

import { Card, CardActionArea, Typography, CardMedia, CardContent, Box } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/ProductStyle";

function ProductCart(props) {
  const classes = useStyles(props);
  const styles = {
    horizontalMargin: {
      margin: "0 .5rem",
    },
    font500: {
      fontWeight: "bold",
    },
    commentRating: {
      backgroundColor: "red",
    },
  };

  return (
    <Card className={classes.similerCard}>
      <CardActionArea>
        <CardMedia component="img" alt="Contemplative Reptile" className={classes.similerCardImage} image="./images/product/image1.jpg" title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            IWS 104 TC Cotton Double Printed Bedsheet
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography className={classes.commentRating} style={styles.commentRating} align="center">
              3.5*
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ ...styles.horizontalMargin, ...styles.font500 }}>
              (1192)
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">$329</Typography>
            <Typography variant="body2" style={{ margin: "0 8px", textDecoration: "line-through" }}>
              $1,199
            </Typography>
            <Typography variant="body2" style={{ color: "green", fontWeight: "bold" }}>
              72% off
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCart;
