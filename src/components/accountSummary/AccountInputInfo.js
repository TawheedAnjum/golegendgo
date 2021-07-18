import React from "react";

import ProfileInfoListItem from "../profile/ProfileInfoListItem";
import ProfileItemHeader from "../profile/ProfileItemHeader";

import { Typography, Button, Grid, Box, TextField } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/userProfileStyle";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";

function AccountInputInfo() {
  const classes = useStyles();

  const StyleInputFild = styled(TextField)`
    & {
      width: 95%;
    }
    & .MuiOutlinedInput-inputMarginDense {
      padding-top: 8px;
      padding-bottom: 8px;
    }
    & .MuiOutlinedInput-root {
      border-radius: 8px;
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    }
  `;

  return (
    <div>
      <Box>
        <ProfileItemHeader profileItemHeaderBgColor="#a0d831">
          <Typography variant="subtitle2">GBL 000 01 Info</Typography>
          <Button startIcon={<EditIcon />} style={{ color: "white" }}>
            Edit
          </Button>
        </ProfileItemHeader>
        <div style={{ padding: "16px 0" }}>
          <Grid container alignItems="center" className={classes.profileInfoBody} spacing={1}>
            <ProfileInfoListItem listTitle="Joining Date" listText={<StyleInputFild id="standard-size-small" variant="outlined" size="small" />} />
            <ProfileInfoListItem listTitle="Full Name" listText={<StyleInputFild id="standard-size-small" variant="outlined" size="small" />} />
            <ProfileInfoListItem listTitle="E mail" listText={<StyleInputFild id="standard-size-small" variant="outlined" size="small" />} />
            <ProfileInfoListItem listTitle="NID No" listText={<StyleInputFild id="standard-size-small" variant="outlined" size="small" />} />
          </Grid>
        </div>
      </Box>
      <Box>
        <ProfileItemHeader profileItemHeaderBgColor="#a0d831">
          <Typography variant="subtitle2">Guardian Information</Typography>
          <Button startIcon={<EditIcon />} style={{ color: "white" }}>
            Edit
          </Button>
        </ProfileItemHeader>
        <div style={{ padding: "16px 0" }}>
          <Grid container alignItems="center" className={classes.profileInfoBody} spacing={1}>
            <ProfileInfoListItem listTitle="Father's Name" listText={<StyleInputFild id="standard-size-small" variant="outlined" size="small" />} />
            <ProfileInfoListItem listTitle="Mother's Name" listText={<StyleInputFild id="standard-size-small" variant="outlined" size="small" />} />
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default AccountInputInfo;
