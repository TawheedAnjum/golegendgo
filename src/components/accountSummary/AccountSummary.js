import React from "react";

import { Grid, Typography, Paper, Box } from "@material-ui/core";
import { useStyles } from "../../assets/styleJS/myIDInfoStyle";

import FingerprintIcon from "@material-ui/icons/Fingerprint";
import LocalAtmOutlinedIcon from "@material-ui/icons/LocalAtmOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";

function AccountSummary() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item md={6} xs={7}>
          <Paper elevation={2}>
            <Typography variant="body1" align="center" className={classes.headerSummary}>
              Account Summary
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={6} xs={5}>
          <Typography variant="body1" align="center" color="textSecondary" className={classes.headerBalance}>
            Balance
          </Typography>
        </Grid>
      </Grid>
      {/* items */}
      <Grid container>
        <Grid item md={6} xs={7} className={classes.summaryItem} style={{ backgroundColor: "#5c6bc0" }}>
          <Box>
            <Box display="flex" alignItems="center">
              <Box className={classes.itemIcon} ml={1}>
                <FingerprintIcon />
              </Box>
              <Box>
                <Typography variant="body1" className={classes.itemText}>
                  ID Status
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={5} className={classes.balanceItem}>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.balanceText}>
            0.00
          </Typography>
          <Box borderTop={1} borderColor="grey.500"></Box>
        </Grid>
        {/* 2 */}
        <Grid item md={6} xs={7} className={classes.summaryItem}>
          <Box>
            <Box display="flex" alignItems="center">
              <Box className={classes.itemIcon} ml={1}>
                <LocalAtmOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="body1" className={classes.itemText}>
                  Current Balance:
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={5} className={classes.balanceItem}>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.balanceText}>
            0.00
          </Typography>
          <Box borderTop={1} borderColor="grey.500"></Box>
        </Grid>
        {/* 3 */}
        <Grid item md={6} xs={7} className={classes.summaryItem}>
          <Box>
            <Box display="flex" alignItems="center">
              <Box className={classes.itemIcon} ml={1}>
                <MonetizationOnOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="body1" className={classes.itemText}>
                  Product Balance
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={5} className={classes.balanceItem}>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.balanceText}>
            0.00
          </Typography>
          <Box borderTop={1} borderColor="grey.500"></Box>
        </Grid>
        {/* 4 */}
        <Grid item md={6} xs={7} className={classes.summaryItem}>
          <Box>
            <Box display="flex" alignItems="center">
              <Box className={classes.itemIcon} ml={1}>
                <AssessmentOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="body1" className={classes.itemText}>
                  Net Generation Income
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={5} className={classes.balanceItem}>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.balanceText}>
            0.00
          </Typography>
          <Box borderTop={1} borderColor="grey.500"></Box>
        </Grid>
        {/* 5 */}
        <Grid item md={6} xs={7} className={classes.summaryItem}>
          <Box>
            <Box display="flex" alignItems="center">
              <Box className={classes.itemIcon} ml={1}>
                <TrendingUpOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="body1" className={classes.itemText}>
                  Net Refferences Income
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={5} className={classes.balanceItem}>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.balanceText}>
            0.00
          </Typography>
          <Box borderTop={1} borderColor="grey.500"></Box>
        </Grid>
        {/* 6 */}
        <Grid item md={6} xs={7} className={classes.summaryItem}>
          <Box>
            <Box display="flex" alignItems="center">
              <Box className={classes.itemIcon} ml={1}>
                <ReportProblemOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="body1" className={classes.itemText}>
                  Self Purchase Report
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={5} className={classes.balanceItem}>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.balanceText}>
            0.00
          </Typography>
          <Box borderTop={1} borderColor="grey.500"></Box>
        </Grid>
        {/* 7 */}
        <Grid item md={6} xs={7} className={classes.summaryItem}>
          <Box>
            <Box display="flex" alignItems="center">
              <Box className={classes.itemIcon} ml={1}>
                <ShoppingBasketOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="body1" className={classes.itemText}>
                  Vouchers
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={5} className={classes.balanceItem}>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.balanceText}>
            0.00
          </Typography>
          <Box borderTop={1} borderColor="grey.500"></Box>
        </Grid>
        {/* 8 */}
        <Grid item md={6} xs={7} className={classes.summaryItem}>
          <Box>
            <Box display="flex" alignItems="center">
              <Box className={classes.itemIcon} ml={1}>
                <CardGiftcardOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="body1" className={classes.itemText}>
                  Gift Card
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={5} className={classes.balanceItem}>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.balanceText}>
            0.00
          </Typography>
          <Box borderTop={1} borderColor="grey.500"></Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AccountSummary;
