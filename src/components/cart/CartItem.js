import React, { useState } from "react";

import {
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
} from "@material-ui/core";

import image1 from "../../assets/images/product/image1small.jpg";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import useStyles from "../../assets/styleJS/cartStyle";

function CartItem(props) {
  const classes = useStyles(props);
  const [quantity, setQuantity] = useState(1);
  return (
    <div style={{ borderBottom: "1px solid #e0e0e0", padding: "1rem 0px" }}>
      <Grid container spacing={1} className={classes.cartItem}>
        <Grid item md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <Card className={classes.card} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    image={image1}
                    title="Contemplative Reptile"
                    className={classes.media}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={9} xs={12}>
              <Typography variant="body1" style={{ fontWeight: "500" }}>
                IWS 104 TC Cotton Double Printed Bedsheet
              </Typography>
              <Typography gutterBottom variant="body1">
                Pack of 1, Green
              </Typography>
              <Box mt={2}>
                <Typography gutterBottom variant="subtitle2">
                  Seller:RetailNet
                </Typography>
              </Box>

              <Box mt={1} display="flex" alignItems="center">
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  ₹329
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{
                    margin: "0 .5rem",
                    textDecoration: "line-through",
                  }}
                >
                  ₹1,199
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{ color: "#388e3c", fontWeight: "500" }}
                >
                  72% off
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{ color: "#388e3c", fontWeight: "500", marginLeft: '1rem' }}
                >
                  2 offers avaialble
                </Typography>
              </Box>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item md={3} xs={4}>
                <IconButton
                  aria-label="delete"
                  className={classes.actionBtn}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <AddIcon className={classes.actionIcon} />
                </IconButton>

                <input
                  type="text"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  className={classes.inputFild}
                />

                <IconButton
                  aria-label="delete"
                  className={classes.actionBtn}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <RemoveIcon className={classes.actionIcon} />
                </IconButton>
              </Grid>
              <Grid item md={9} xs={8}>
                <Button className={classes.removeBtn}>SAVE FOR LATER</Button>
                <Button className={classes.removeBtn}>REMOVE</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12} className={classes.delivary}>
          <Box display="flex">
            <Typography>Delivery by Wed Jul 7 |</Typography>
            <Typography style={{ color: "green", margin: "0 4px" }}>
              Free
            </Typography>
            <Typography style={{ fontWeight: "500" }}>$40</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default CartItem
