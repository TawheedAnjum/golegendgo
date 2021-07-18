import React from "react";

import ProfileInfoListItem from "./ProfileInfoListItem";
import ProfileItemHeader from "./ProfileItemHeader";

import { Typography, Button, Grid, Box } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/userProfileStyle";
import EditIcon from "@material-ui/icons/Edit";

function UserAllInfo() {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <ProfileItemHeader profileItemHeaderBgColor="#7292cb">
          <Typography variant="subtitle2">Personal Information</Typography>
          <Button startIcon={<EditIcon />} style={{ color: "white" }}>
            Edit
          </Button>
        </ProfileItemHeader>
        <div style={{ padding: "16px 0" }}>
          <Grid container className={classes.profileInfoBody} spacing={1}>
            <ProfileInfoListItem listTitle="Full Name" listText="Text Here" />
            <ProfileInfoListItem listTitle="E mail" listText="Text Here" />
            <ProfileInfoListItem listTitle="Phone No" listText="Text Here" />
            <ProfileInfoListItem listTitle="NID No" listText="Text Here" />
            <ProfileInfoListItem listTitle="Date Of Birth" listText="Text Here" />
            <ProfileInfoListItem listTitle="Permanent Adress" listText="Text Here" />
          </Grid>
        </div>
      </Box>
      <Box>
        <ProfileItemHeader profileItemHeaderBgColor="#7292cb">
          <Typography variant="subtitle2">Guardian Information</Typography>
          <Button startIcon={<EditIcon />} style={{ color: "white" }}>
            Edit
          </Button>
        </ProfileItemHeader>
        <div style={{ padding: "16px 0" }}>
          <Grid container className={classes.profileInfoBody} spacing={1}>
            <ProfileInfoListItem listTitle="Father's Name" listText="Text Here" />
            <ProfileInfoListItem listTitle="Mother's Name" listText="Text Here" />
          </Grid>
        </div>
      </Box>
      <Box>
        <ProfileItemHeader profileItemHeaderBgColor="#7292cb">
          <Typography variant="subtitle2">Adress</Typography>
          <Button startIcon={<EditIcon />} style={{ color: "white" }}>
            Edit
          </Button>
        </ProfileItemHeader>
        <div style={{ padding: "16px 0" }}>
          <Grid container className={classes.profileInfoBody} spacing={1}>
            <ProfileInfoListItem listTitle="Present Address" listText="Text Here" />
            <ProfileInfoListItem listTitle="Permanent Address" listText="Text Here" />
          </Grid>
        </div>
      </Box>
      <Box>
        <ProfileItemHeader profileItemHeaderBgColor="#7292cb">
          <Typography variant="subtitle2">Npminee Information</Typography>
          <Button startIcon={<EditIcon />} style={{ color: "white" }}>
            Edit
          </Button>
        </ProfileItemHeader>
        <div style={{ padding: "16px 0" }}>
          <Grid container className={classes.profileInfoBody} spacing={1}>
            <ProfileInfoListItem listTitle="Name" listText="Text Here" />
            <ProfileInfoListItem listTitle="Relation" listText="Text Here" />
            <ProfileInfoListItem listTitle="Mobile No" listText="Text Here" />
          </Grid>
        </div>
      </Box>
      <Box>
        <ProfileItemHeader profileItemHeaderBgColor="#f7ac1f">
          <Typography variant="subtitle2">Change Password</Typography>
          <Button startIcon={<EditIcon />} style={{ color: "white" }}>
            Edit
          </Button>
        </ProfileItemHeader>
      </Box>
    </div>
  );
}

export default UserAllInfo;
