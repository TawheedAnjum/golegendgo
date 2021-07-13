import React from "react";

import { Typography, Box } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/userProfile";

import ProfilePicture from "../myAcoount/ProfilePicture";

function UserProfileInfo() {
  const classes = useStyles();
  return (
    <div>
      <Box display="flex" flexDirection="column">
        <Box alignSelf="center" mb={2}>
          <ProfilePicture />
        </Box>
        <Typography variant="h5" align="center" className={classes.profileName}>
          Your Name Here
        </Typography>
      </Box>
    </div>
  );
}

export default UserProfileInfo;
