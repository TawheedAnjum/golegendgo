import React from "react";

import { Box } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/userProfile";

function ProfileItemHeader(props) {
  const classes = useStyles(props);
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.profileInfoHeader}>
      {props.children}
    </Box>
  );
}

export default ProfileItemHeader;
