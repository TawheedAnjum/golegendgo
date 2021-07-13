import React from "react";

import {
  Typography,
  Button,
  Box,
  Grid,
  List,
  ListItem,
  Paper,
  Link,
  Collapse,
} from "@material-ui/core";
import {useStyles} from "../../assets/styleJS/ProductStyle";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import RatingDetails from "./RatingDetails";
import RatingComment from "./RatingComment";


function ProductInfo(props) {
  const classes = useStyles(props);
  
// ratting color
  const ratingHandler = (rating)=> {
    if(rating < 2){
      return 'red'
    }else if(rating >= 2 && rating<3){
      return '#ff9f00';
    }
    return 'green'
  }
 

  // style
  const styles = {
      horizontalMargin: {
        margin: "0 .5rem",
      },
      font500: {
          fontWeight: "bold",
      },
      commentRating: {
        backgroundColor: ratingHandler(props.productInfo.totalRating),
      },
  };

  const listNumber = [0, 1, 2, 3, 4, 5];
  const comments = [0, 1, 2,3,5];

  // more
  const [checked, setChecked] = React.useState(false);
  const [moreChaked, setMoreChaked] = React.useState(false)

  const handleChange = () => {
    setChecked((prev) => !prev);
    setMoreChaked((prev) => !prev);
  };
  let moreBtn = (
    <Button href="#text-buttons" color="primary" onClick={handleChange}>
      Read More
    </Button>
  );
  if (moreChaked) {
    moreBtn = (
      <Button href="#text-buttons" color="primary" onClick={handleChange}>
        Read Less
    </Button>
    );
  };

  const moreComments = (
    <Box>
      {comments.slice(0, 2).map((i) => {
        return (
          <Box
            key={i}
            style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}
          >
            <RatingComment />
          </Box>
        );
      })}
      <Collapse in={checked} collapsedHeight={98}>
        {comments.slice(3).map((i) => {
          return (
            <Box
              key={i}
              style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}
            >
              <RatingComment />
            </Box>
          );
        })}
      </Collapse>
      <Box style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}>
        {moreBtn}
      </Box>
    </Box>
  );

  const allComments = comments.map(i => {
    return (
      <Box
        key={i}
        style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}
      >
        <RatingComment />
      </Box>
    );
  })
  // more finish

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {props.productInfo.productTitle}
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography className={classes.commentRating} style={styles.commentRating} align="center">
          {props.productInfo.totalRating}*
        </Typography>
        <Typography
          variant="subtitle1"
          display="inline"
          color="textSecondary"
          style={{ fontWeight: "500", marginLeft: "8px"}}
        >
          {props.productInfo.totalRatingNumber} Ratings & {props.productInfo.totalReviewNumber} Reviews
        </Typography>
      </Box>

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
            ₹{props.productInfo.recentPrice}
          </Typography>
          <Typography
            color="textSecondary"
            style={{ margin: "0 .5rem", textDecoration: "line-through" }}
          >
            ₹{props.productInfo.oldPrice}
          </Typography>
          <Typography color="textSecondary" style={{ color: "#388e3c" }}>
            {props.productInfo.discount}% off
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
                      Get extra 15% off (price inclusive of discount){" "}
                      <Link href="#">T&C</Link>
                    </Typography>
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
         {props.productInfo.description}
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
          <Typography
            variant="h5"
            style={{ fontWeight: "500", marginBottom: "1rem" }}
            gutterBottom
          >
            Ratings & Reviews
          </Typography>
          <RatingDetails />
        </Box>
        <Box>
          {/* {comments.map(i => {
            return (
              <Box
                style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0" }}
              >
                <RatingComment key={i} />
              </Box>
            );
          })} */}
          {comments.length>3 ? moreComments : allComments}
        </Box>
      </Paper>
      {/* rating finish */}
    </div>
  );
}

export default ProductInfo;
