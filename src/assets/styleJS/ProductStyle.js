import { makeStyles, LinearProgress, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ratingbtn: {
    backgroundColor: "#388e3c",
    color: "white",
    marginRight: ".5rem",
    "&:hover": {
      backgroundColor: "#2a6e2e",
    },
  },
  offerLink: {
    minWidth: 0,
  },
  topMargin: {
    marginTop: "1.5rem",
  },

  //   productImage
  card: {
    height: "70px",
  },
  media: {
    paddingTop: "100%", // 1:1,
  },
  addbtn: {
    marginTop: "1rem",
    width: "100%",
    height: "50px",
    backgroundColor: "#ff9f00",
    color: "white",
    "&:hover": {
      backgroundColor: "#f19603",
    },
  },
  buybtn: {
    marginTop: "1rem",
    width: "100%",
    height: "50px",
    backgroundColor: "#fb641b",
    color: "white",
    "&:hover": {
      backgroundColor: "#f0621b",
    },
  },

  // review
  // reviewComment
  commentRating: {
    fontSize: ".8rem",
    color: "white",
    padding: "2px 0",
    minWidth: "40px",
    boxShadow: "none",
    borderRadius: '4px',
  },
  reviewStatus: {
    fontWeight: "bold",
    margin: "0 10px",
  },
  leftFlex: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  reviewername: {
    fontWeight: "500",
  },
  certifyIcon: {
    fontSize: "1rem",
    color: "rgba(0, 0, 0, 0.6)",
    marginRight: "4px",
    [theme.breakpoints.up("lg")]: { marginLeft: "1rem" },
  },
  thumbIcon: {
    color: "rgba(0, 0, 0, 0.4)",
    marginRight: "6px",
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  thumbNumber: {
    marginRight: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },

  // single card
  similerCard: {
    maxWidth: "95%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: '100%',
      margin: '0 1rem'
    },
  },
  similerCardImage: {
    height: "180px",
  },
}));


const BorderLinearProgress = withStyles({
  root: {
    height: 5.5,
    borderRadius: 5,
    width: "150px",
    margin: "0 .8rem",
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: (props) => props.bgcolor,
  },
})(LinearProgress);

export { useStyles, BorderLinearProgress };