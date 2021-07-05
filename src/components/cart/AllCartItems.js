import React from 'react';

import CartItem from './CartItem';

import {
  Typography,
  Button,
  Box,
  Grid,
  Paper,
} from "@material-ui/core";
import PinDropIcon from "@material-ui/icons/PinDrop";


import useStyles from '../../assets/styleJS/cartStyle';

function AllCartItems(props) {
  const classes = useStyles(props);
  const itemNumber = [1,2];
  return (
    <Paper>
      <Grid
        container
        alignItems="center"
        style={{ borderBottom: "1px solid #e0e0e0" }}
      >
        <Grid item md={7} xs={4} className={classes.cartItem}>
          <Typography variant="h6">My cart(1)</Typography>
        </Grid>
        <Grid item md={5} xs={8}>
          <Box display="flex" alignItems="center">
            <PinDropIcon color="primary" />
            <Typography variant="subtitle2" style={{ margin: "0 4px" }}>
              Deliver to:
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ fontWeight: "500" }}
              color="textSecondary"
            >
              Road no: 12, Boshundhora, Dhaka
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* items */}
      {itemNumber.map((i) => {
        return <CartItem key={i} />;
      })}
      {/* items */}

      {/* plasce order */}
      <div>
        <Box display="flex" m={3} pb={3} pr={2} justifyContent="flex-end">
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

export default AllCartItems;
