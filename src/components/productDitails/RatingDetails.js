import React from 'react';

import {
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
import { BorderLinearProgress } from "../../assets/styleJS/ProductStyle";

import StarIcon from "@material-ui/icons/Star";



function RatingDetails() {
    return (
      <Grid container spacing={3} alignItems="center">
        <Grid item align="center">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5">3.7</Typography>
            <StarIcon />
          </Box>
          <Typography variant="body1" color="textSecondary">
            92,818 Ratings &
          </Typography>
          <Typography variant="body1" color="textSecondary">
            9,065 Reviews
          </Typography>
        </Grid>
        <Grid item>
          <Box>
            <Box display="flex" alignItems="center">
              <Typography varient="caption">5</Typography>
              <StarIcon style={{ fontSize: "1rem" }} />
              <BorderLinearProgress
                variant="determinate"
                value={95}
                bgcolor="green"
              />
              <Typography varient="caption">37,512</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography varient="caption">4</Typography>
              <StarIcon style={{ fontSize: "1rem" }} />
              <BorderLinearProgress
                variant="determinate"
                value={80}
                bgcolor="green"
              />
              <Typography varient="caption">21,333</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography varient="caption">3</Typography>
              <StarIcon style={{ fontSize: "1rem" }} />
              <BorderLinearProgress
                variant="determinate"
                value={50}
                bgcolor="yellow"
              />
              <Typography varient="caption">16,264</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography varient="caption">5</Typography>
              <StarIcon style={{ fontSize: "1rem" }} />
              <BorderLinearProgress
                variant="determinate"
                value={20}
                bgcolor="red"
              />
              <Typography varient="caption">7,656</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography varient="caption">1</Typography>
              <StarIcon style={{ fontSize: "1rem" }} />
              <BorderLinearProgress
                variant="determinate"
                value={20}
                bgcolor="red"
              />
              <Typography varient="caption">10,053</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
}

export default RatingDetails
