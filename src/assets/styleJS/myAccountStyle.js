import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Avatar, LinearProgress } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  // profile picture;
  profilePictureInput: {
    display: "none",
  },
  // user info
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  // lavel
  lavelBadge: {
    maxHeight: 32,
    maxWidth: 32,
    textAlign: "center",
    padding: 20,
    position: "relative",
    borderRadius: 10,
  },
  rankPointText: {
    height: 18,
    width: 160,
    border: "1px solid black",
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },

  // list
  accountList: {
    padding: "1rem",
    backgroundColor: "#faf9f9;",
    borderRadius: 24,
  },
  accountListIcon: {
    boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    height: 32,
    width: 32,
    borderRadius: 6,
  },
}));

// with Styles
export const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 16,
    height: 16,
    right: -110,
    top: 90,
    boxShadow: "rgb(0 0 0 / 20%) 0px 1px 8px 0px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 3px 3px -2px",
    backgroundColor: "white",
    padding: "8px",
    [theme.breakpoints.down("sm")]: {
      width: 12,
      height: 12,
      right: -100,
      top: 80,
    },
  },
}))(Avatar);

// progress
export const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 16,
    width: 200,
    border: "1px solid black",
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  bar: {
    backgroundColor: (props) => props.bgcolor,
  },
}))(LinearProgress);
