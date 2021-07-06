import React from 'react';
import { Typography, Box, Grid, Button } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/ProductStyle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const styles = {
  commentRating:{
    backgroundColor: 'red',
  }
};

function RatingComment(props) {
    const classes = useStyles(props);
    return (
      <div style={{ margin: "1rem 0" }}>
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            size="small"
            className={classes.commentRating}
            style={styles.commentRating}
          >
            3.2*
          </Button>
          <Typography varient="body1" className={classes.reviewStatus}>
            Not good
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography varient="body1">
            see the quality is poor, it's like color will definitely fade away.
            also area wise not suitable for double bed.
          </Typography>
        </Box>
        <Box mt={2}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box className={classes.leftFlex}>
              <Box>
                <Typography variant="caption" className={classes.reviewername} gutterBottom>
                  Ankur Sen
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <CheckCircleIcon className={classes.certifyIcon} />
                <Typography variant="caption">
                  Certified Buyer, Gurugram Jun, 20
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <ThumbUpAltIcon className={classes.thumbIcon} fontSize="small" />
              <Typography variant="body1" className={classes.thumbNumber}>
                21
              </Typography>

              <ThumbDownIcon className={classes.thumbIcon} fontSize="small" />
              <Typography variant="body1" className={classes.thumbNumber}>
                21
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    );
}

export default RatingComment
