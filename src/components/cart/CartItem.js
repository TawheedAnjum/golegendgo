import React from 'react'

import {
  makeStyles,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Card, 
  CardActionArea,
  CardMedia
} from "@material-ui/core";

import image1 from "../../assets/images/product/image1small.jpg";

const useStyles = makeStyles({
  cartItem: {
    padding: "1rem 1.5rem",
  },
  media: {
    paddingTop: "100%", // 1:1,
  },
  orderBtn: {
    width: "220px",
    height: "50px",
    backgroundColor: "#fb641b",
    color: "white",
    "&:hover": {
      backgroundColor: "#f0621b",
    },
  },
});

function CartItem(props) {
    const classes = useStyles(props);
    return (
      <Paper>
        <Grid
          container
          alignItems="center"
          style={{ borderBottom: "1px solid #e0e0e0" }}
        >
          <Grid item md={7} xs={7} className={classes.cartItem}>
            <Typography variant="h6">My cart(1)</Typography>
          </Grid>
          <Grid item md={5} xs={5}></Grid>
        </Grid>

        {/* items */}
        <div style={{ borderBottom: "1px solid #e0e0e0" }}>
          <Grid container className={classes.cartItem}>
            <Grid item md={8} xs={12}>
              <Grid container spacing={4}>
                <Grid item md={4} xs={12}>
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
                <Grid item md={8} xs={12}>
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
                      style={{ color: "#388e3c" }}
                    >
                      72% off
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography>Delivery by Wed Jul 7 | Free₹80</Typography>
            </Grid>
          </Grid>
        </div>
        {/* items */}

        {/* plasce order */}
        <div>
          <Box display="flex" m={3} pb={3} justifyContent="flex-end">
            <Button
              variant="contained"
              className={classes.orderBtn}
              disableElevation
            >
              PLACE ORDER
            </Button>
          </Box>
        </div>
        {/* palge order finish */}
      </Paper>
    );
}

export default CartItem
