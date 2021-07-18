import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerSummary: {
    fontWeight: "500",
    color: theme.palette.primary.light,
    padding: theme.spacing(2),
    height: "30px",
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      padding: theme.spacing(1),
    },
  },
  headerBalance: {
    fontWeight: "500",
    padding: theme.spacing(2),
    fontSize: "1.5rem",
    height: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      padding: theme.spacing(1),
    },
  },

  //   left
  itemIcon: {
    width: "40px",
    [theme.breakpoints.down("sm")]: {
      width: "30px",
    },
  },
  summaryItem: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    color: "white",
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      height: "50px",
    },
  },
  itemText: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
    },
  },

  //   balance
  balanceItem: {
    padding: theme.spacing(2),
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      height: "50px",
    },
  },
  balanceText: {
    fontWeight: "bold",
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
}));

export { useStyles };
