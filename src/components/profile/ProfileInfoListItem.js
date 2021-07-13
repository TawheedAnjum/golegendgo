import React from "react";

import { Typography, Grid } from "@material-ui/core";

function ProfileInfoListItem(props) {
  return (
    <React.Fragment>
      <Grid item md={6} xs={6}>
        <Typography variant="subtitle1">{props.listTitle}</Typography>
      </Grid>
      <Grid item md={6} xs={6}>
        <Typography variant="subtitle1">{props.listText}</Typography>
      </Grid>
    </React.Fragment>
  );
}

export default ProfileInfoListItem;
