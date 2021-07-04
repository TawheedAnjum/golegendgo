import React from "react";

import {
  makeStyles,
  Typography,
  Button,
  Box,
  Grid,
  List,
  ListItem,
  Paper,
} from "@material-ui/core";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import "../../assets/css/productInfo.css";
import RatingDetails from "./RatingDetails";

const useStyles = makeStyles({
  ratingbtn: {
    backgroundColor: "#388e3c",
    color: "white",
    marginRight: ".5rem",
    "&:hover": {
      backgroundColor: "#2a6e2e",
    },
  },
  offerLink: {
    minWidth: 0,
  },
  topMargin:{
    marginTop: '1.5rem',
  }
});

function ProductInfo(props) {
  const classes = useStyles(props);

  const listNumber = [0, 1, 2, 3, 4, 5];

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        IWS 104 TC Cotton Double Printed Bedsheet (Pack of 1, Green)#JustHere
      </Typography>
      <Button
        variant="contained"
        size="small"
        color="primary"
        className={classes.ratingbtn}
      >
        3.5*
      </Button>
      <Typography
        variant="subtitle1"
        display="inline"
        color="textSecondary"
        style={{ fontWeight: "500" }}
      >
        92,709 Ratings & 9,051 Reviews
      </Typography>

      {/* price */}
      <div className="price">
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "500", color: "#388e3c" }}
        >
          Special price
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            ₹329
          </Typography>
          <Typography
            color="textSecondary"
            style={{ margin: "0 .5rem", textDecoration: "line-through" }}
          >
            ₹1,199
          </Typography>
          <Typography color="textSecondary" style={{ color: "#388e3c" }}>
            72% off
          </Typography>
        </Box>
      </div>
      {/* price finish */}

      {/* avaialble offer */}
      <div className={classes.topMargin}>
        <Typography variant="h6">Available offers</Typography>
        <Grid container>
          <Grid item>
            <List style={{ paddingTop: "0" }}>
              {listNumber.slice(0, 4).map((i) => {
                return (
                  <ListItem style={{ padding: "0 0" }} key={i}>
                    <LocalOfferIcon
                      style={{ color: "#388e3c", fontSize: "1.2rem" }}
                    />
                    <Typography
                      style={{
                        marginLeft: ".5rem",
                        marginRight: ".3rem",
                        fontWeight: "500",
                      }}
                    >
                      Special Price:
                    </Typography>
                    <Typography>
                      Get extra 15% off (price inclusive of discount)
                    </Typography>
                    <Button
                      href="#text-buttons"
                      color="primary"
                      className={classes.offerLink}
                    >
                      T&C
                    </Button>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </div>
      {/* abaialbele offer finish */}

      {/* description */}
      <Box display="flex" style={{ marginTop: "1.5rem" }}>
        <Typography style={{ marginRight: "1.5rem" }}>Description</Typography>
        <Typography>
          We offers to you a range of home furnishing products from the house of
          IWS. IWS is a leading home furnishing brand of the country. This
          beautiful bed sheet will not only add a dash of colour and vibrancy to
          your home but also will fetch admiration and compliments. Bring home
          this beautiful bed sheet from the house of IWS today and get ready to
          mesmerise one and all.
        </Typography>
      </Box>
      {/* description finish */}

      {/* spacification */}
      <Paper variant="outlined" className={classes.topMargin}>
        <Box style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}>
          <Typography variant="h5" style={{ fontWeight: "500" }}>
            Specifications
          </Typography>
        </Box>
        <Box style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: "normal", marginBottom: "1rem" }}
            gutterBottom
          >
            In The Box
          </Typography>
          <Grid container>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom>
                Sales Package
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle1" gutterBottom>
                2 Pillow Covers, 1 Bedsheet
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom>
                Number of Bedsheets
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle1" gutterBottom>
                1
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: "normal", marginBottom: "1rem" }}
            gutterBottom
          >
            General
          </Typography>
          <Grid container>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom>
                Brand
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle1" gutterBottom>
                IWS
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom>
                Color
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle1" gutterBottom>
                Type
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom>
                Flat
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle1" gutterBottom>
                1
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}>
          <Button href="#text-buttons" color="primary">
            Read More
          </Button>
        </Box>
      </Paper>
      {/* spafication finish */}

      {/* rating & review */}
      <Paper variant="outlined" className={classes.topMargin}>
        <Box style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}>
          <Typography variant="h5" style={{ fontWeight: "500", marginBottom: '1rem' }} gutterBottom>
            Ratings & Reviews
          </Typography>
          <RatingDetails />
        </Box>
      </Paper>
      {/* rating finish */}
    </div>
  );
}

export default ProductInfo;