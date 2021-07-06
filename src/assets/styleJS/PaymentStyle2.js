import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  accordionRoot: {
    margin: "1.2rem 0",
    "& MuiAccordion-root": {
      backgroundColor: "blue",
    },
  },
  arrodinationNumber: {
    height: "28px",
    width: "28px",
    marginRight: ".8rem",
  },
  accordionSummary: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  loginDitails: {
    margin: "0 1rem",
  },
  emailField: {
    width: "90%",
  },
  policy: {
    width: "85%",
    margin: "1.2rem 0",
  },
  continueBtn: {
    width: "90%",
    height: "50px",
    backgroundColor: "#fb641b",
    color: "white",
    "&:hover": {
      backgroundColor: "#f0621b",
    },
  },
  listIcon: {
    minWidth: "28px",
    color: "blue",
  },
  listItem: {
    padding: "2px 0",
    "& span, & svg": {
      fontSize: "1rem",
    },
  },
}));

export default useStyles;