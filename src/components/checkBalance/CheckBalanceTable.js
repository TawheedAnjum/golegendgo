import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/checkBalanceStyle";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import LocalAtmOutlinedIcon from "@material-ui/icons/LocalAtmOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";

function CheckBalanceTable(props) {
  const classes = useStyles(props);
  return (
    <div>
      <Box>
        <Typography variant="h5" align="center" className={classes.checkHeader}>
          My Account
        </Typography>
        <div className={classes.checkBody}>
          <Grid container>
            <Grid item md={6} xs={7} className={classes.checkBalLeft} style={{ backgroundColor: "#86b82b" }}>
              <Box display="flex" alignItems="center" className={classes.checkColxSize}>
                <Box className={classes.checkLeftIcon}>
                  <AccountBalanceOutlinedIcon className={classes.checkIconDesign} />
                </Box>
                <Typography variant="h6" className={classes.checkLeftFont}>
                  Current Bal
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={5} className={classes.checkBalRight}>
              <Box display="flex" alignItems="center" justifyContent="center" className={classes.checkColxSizeRight}>
                <Typography variant="h6" alignItems="center" color="textSecondary" className={classes.checkRightFont}>
                  0.000
                </Typography>
              </Box>
            </Grid>

            {/* 2 */}
            <Grid item md={6} xs={7} className={classes.checkBalLeft}>
              <Box display="flex" alignItems="center" className={classes.checkColxSize}>
                <Box className={classes.checkLeftIcon}>
                  <MonetizationOnOutlinedIcon className={classes.checkIconDesign} />
                </Box>
                <Typography variant="h6" className={classes.checkLeftFont}>
                  Product Bal
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={5} className={classes.checkBalRight}>
              <Box display="flex" alignItems="center" justifyContent="center" className={classes.checkColxSizeRight}>
                <Typography variant="h6" alignItems="center" color="textSecondary" className={classes.checkRightFont}>
                  0.000
                </Typography>
              </Box>
            </Grid>

            {/* 3 */}
            <Grid item md={6} xs={7} className={classes.checkBalLeft}>
              <Box display="flex" alignItems="center" className={classes.checkColxSize}>
                <Box className={classes.checkLeftIcon}>
                  <LocalAtmOutlinedIcon className={classes.checkIconDesign} />
                </Box>
                <Typography variant="h6" className={classes.checkLeftFont}>
                  Vouchers
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={5} className={classes.checkBalRight}>
              <Box display="flex" alignItems="center" justifyContent="center" className={classes.checkColxSizeRight}>
                <Typography variant="h6" alignItems="center" color="textSecondary" className={classes.checkRightFont}>
                  0.000
                </Typography>
              </Box>
            </Grid>

            {/* 4 */}
            <Grid item md={6} xs={7} className={classes.checkBalLeft} style={{ borderRadius: "0 0 16px 16px" }}>
              <Box display="flex" alignItems="center" className={classes.checkColxSize}>
                <Box className={classes.checkLeftIcon}>
                  <CardGiftcardOutlinedIcon className={classes.checkIconDesign} />
                </Box>
                <Typography variant="h6" className={classes.checkLeftFont}>
                  GiftCard
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={5} className={classes.checkBalRight}>
              <Box display="flex" alignItems="center" justifyContent="center" className={classes.checkColxSizeRight} style={{ borderBottom: "none" }}>
                <Typography variant="h6" alignItems="center" color="textSecondary" className={classes.checkRightFont}>
                  0.000
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default CheckBalanceTable;
