import React from "react";

import { List, ListItem, ListItemIcon, ListItemText, Divider, Box } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/myAccountStyle";

import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function AccountOption() {
  const classes = useStyles();
  return (
    <div className={classes.accountList}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <PermIdentityIcon style={{ color: "#42a5f5" }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="GLG-00-00-01" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <AccountCircleOutlinedIcon style={{ color: "#42a5f5" }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <AttachMoneyOutlinedIcon style={{ color: "#9ccc65" }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Check Balance" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <AccountBalanceWalletOutlinedIcon style={{ color: "#00796b" }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Transfer" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <AccountBalanceWalletOutlinedIcon style={{ color: "#26a69a" }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Transfer To Product" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <AccountBalanceOutlinedIcon color="secondary" />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Withdraw Here" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <ReportProblemOutlinedIcon color="error" />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <WbIncandescentOutlinedIcon style={{ color: "#ffea00" }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Plan" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <CreditCardOutlinedIcon color="primary" />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Self Purchase Report" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
        <ListItem button style={{ marginBottom: 8 }}>
          <ListItemIcon>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.accountListIcon}>
              <SendOutlinedIcon style={{ color: "#03a9f4" }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="facebook" />
        </ListItem>
        <Divider style={{ marginBottom: 8 }} />
      </List>
    </div>
  );
}

export default AccountOption;
