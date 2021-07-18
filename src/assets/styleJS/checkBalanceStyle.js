import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  checkHeader: {
    padding: theme.spacing(2),
    color: "#95cc30",
    fontWeight: "500",
    boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    borderRadius: "1.5rem 1.5rem 0 0",
  },
  checkBody: {
    padding: theme.spacing(0, 3, 3, 3),
    paddingTop: "1px",
  },
  checkBalLeft: {
    color: "white",
    backgroundColor: "#95cc30",
  },
  checkColxSize: {
    padding: theme.spacing(3, 2),
    height: 16,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3, 1),
    },
  },
  checkLeftIcon: {
    width: 48,
  },
  checkIconDesign: {
    backgroundColor: "white",
    color: "#95cc30",
    padding: theme.spacing(1),
    borderRadius: "8px",
    fontSize: "1.2rem",
  },
  checkColxSizeRight: {
    padding: theme.spacing(3, 2),
    height: 16,
    borderBottom: "1px solid #9e9e9e",
    marginLeft: "8px",
  },
  checkRightFont: {
    fontWeight: "500",
  },
  checkLeftFont: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

export { useStyles };
