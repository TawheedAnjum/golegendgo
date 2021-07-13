import React from "react";

import { Box, Paper, Typography } from "@material-ui/core";
import { useStyles, BorderLinearProgress } from "../../assets/styleJS/myAccountStyle";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";

const styles = {
  lavelStarBadge: {
    position: "absolute",
    left: 6,
    top: 6,
    width: "70%",
    height: "70%",
  },
  lavelText: {
    position: "absolute",
    left: 4.5,
    top: 11,
    width: "80%",
    height: "80%",
    color: "white",
    fontWeight: "bold",
    fontSize: ".8rem",
  },
  goLogo: {
    position: "relative",
    right: 30,
  },
};

function UserLavel() {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Box>
          <Paper elevation={3} className={classes.lavelBadge}>
            <img src="./images/icon/badge.svg" alt="badge" style={styles.lavelStarBadge} />
            <Typography style={styles.lavelText}>21</Typography>
          </Paper>
        </Box>
        <Box>
          <BorderLinearProgress variant="determinate" value={80} bgcolor="#f44336" />
        </Box>
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <Paper elevation={3} className={classes.lavelBadge}>
            <img src="./images/icon/trofy.svg" alt="badge" style={styles.lavelStarBadge} />
          </Paper>
          <Box className={classes.rankPointText} display="flex" alignItems="center" justifyContent="center">
            <Typography align="center" style={{ fontSize: 12 }}>
              Rank points
            </Typography>
          </Box>
          <img src="./images/icon/go_red.jpg" alt="badge" style={styles.goLogo} />
        </Box>
      </Box>
      <Box>
        <Paper elevation={3} className={classes.lavelBadge}>
          <MessageOutlinedIcon style={styles.lavelStarBadge} color="error" />
        </Paper>
      </Box>
    </Box>
  );
}

export default UserLavel;
