import React from "react";

import { Box, Badge, Avatar, Typography } from "@material-ui/core";

import { SmallAvatar, useStyles } from "../../assets/styleJS/myAccountStyle";

const styles = {
  accountUserName: {
    fontWeight: "bold",
  },
};

const UserInfo = () => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Badge overlap="circular" badgeContent={<SmallAvatar src="./images/icon/edit.svg" />}>
          <Avatar alt="Travis Howard" src="./images/userProfile/profile1.png" className={classes.large} />
        </Badge>
      </Box>
      <Box ml={4}>
        <Typography variant="h5" style={styles.accountUserName} color="error">
          Zaber Hossain
        </Typography>
        <Typography variant="body1">+8801234567890</Typography>
        <Typography variant="body1">GLG-00-00-01</Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;
