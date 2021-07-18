import React from "react";

import { SmallAvatar, useStyles } from "../../assets/styleJS/myAccountStyle";
import { Badge, Avatar, IconButton } from "@material-ui/core";

function ProfilePicture() {
  const classes = useStyles();
  return (
    <div>
      {/* <Badge
        overlap="circular"
        badgeContent={
          <div>
            <input accept="image/*" className={classes.profilePictureInput} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <SmallAvatar src="./images/icon/edit.svg" />
              </IconButton>
            </label>
          </div>
        }
      > */}
      <Badge
        overlap="circle"
        badgeContent={
          <div>
            <input accept="image/*" className={classes.profilePictureInput} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <SmallAvatar src="./images/icon/edit.svg" />
              </IconButton>
            </label>
          </div>
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Avatar alt="Travis Howard" src="./images/userProfile/profile1.png" className={classes.large} />
      </Badge>
    </div>
  );
}

export default ProfilePicture;
