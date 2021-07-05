import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  cartItem: {
    padding: "1rem 1.5rem",
  },
  media: {
    height: "120px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      paddingTop: "56.26%",
    },
  },
  orderBtn: {
    width: "220px",
    height: "50px",
    backgroundColor: "#fb641b",
    color: "white",
    "&:hover": {
      backgroundColor: "#f0621b",
    },
  },
  delivary: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
  actionBtn: {
    border: "1px solid rgba(0, 0, 0, 0.54)",
    padding: "4px",
    margin: "0 8px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 8px",
      padding: "4px",
    },
  },
  actionIcon: {
    fontSize: "1rem",
  },
  inputFild: {
    maxWidth: "22px",
    fontSize: ".9rem",
    padding: "4px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "16px",
      padding: "4px",
      border: "1px solid rgba(0, 0, 0, 0.54)",
    },
  },
  removeBtn: {
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
}));

export default useStyles;