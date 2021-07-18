import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  profileName: {
    fontWeight: "500",
    color: theme.palette.text.secondary,
  },

  //   profile informattion
  profileInfoHeader: {
    // #f7ac1f
    // backgroundColor: "#7292cb",
    backgroundColor: (props) => props.profileItemHeaderBgColor,
    color: "white",
    padding: theme.spacing(1, 2),
  },
  profileInfoBody: {
    padding: theme.spacing(1, 2),
  },
}));
