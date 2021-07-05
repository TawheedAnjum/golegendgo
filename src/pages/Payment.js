import React, {useState} from 'react';
import "../assets/css/style.css";
import { StylesProvider } from "@material-ui/core/styles";


import {
  Container,
  Grid,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Link,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import useStyles from '../assets/styleJS/PaymentStyle';
import BeenhereIcon from "@material-ui/icons/Beenhere";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import NotificationsIcon from "@material-ui/icons/Notifications";
import StarIcon from "@material-ui/icons/Star";


function Payment(props) {
    const classes = useStyles(props);

    const [loginStatus, setLoginStatus] = useState(true);
    const [adress, setAdress] = useState(false);
    const [summary, setSummary] = useState(false);
    const [payment, setPayment] = useState(false);

   const accordionHandeler = (option) => {
      setLoginStatus(false);
      setAdress(false);
      setSummary(false);
      setPayment(false);
      option(true);
    }

    return (
      <StylesProvider injectFirst>
        <div
          style={{
            backgroundColor: "#f1f3f6",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Container maxWidth="lg" style={{ paddingTop: "48px" }}>
            <Grid container spacing={2}>
              <Grid item md={8} xs={12}>
                <Box>
                  <Accordion
                    expanded={loginStatus}
                    className={classes.accordionRoot}
                  >
                    <AccordionSummary
                      disableSpacing
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={classes.accordionSummary}
                    >
                      <Box display="flex" alignItems="center">
                        <Paper
                          square
                          className={classes.arrodinationNumber}
                          align="center"
                        >
                          <Typography
                            style={{
                              fontWeight: "bold",
                              color: "#0275d8",
                              marginTop: "2px",
                            }}
                          >
                            1
                          </Typography>
                        </Paper>
                        <Typography style={{ fontWeight: "bold" }}>
                          LOGIN OR SIGNUP
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid
                        container
                        spacing={2}
                        className={classes.loginDitails}
                      >
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="standard-basic"
                            label="Enter Email/Mobile Number"
                            className={classes.emailField}
                          />
                          <Typography
                            variant="caption"
                            className={classes.policy}
                            display="block"
                          >
                            By continuing your agree To Golegendgo's{" "}
                            <Link href="#">Tearms and Use</Link> and{" "}
                            <Link href="#">Private Policy</Link>
                          </Typography>
                          <Button
                            variant="contained"
                            className={classes.continueBtn}
                            disableElevation
                            onClick={() => accordionHandeler(setAdress)}
                          >
                            Continue
                          </Button>
                        </Grid>
                        <Grid item xs={12} md={6} style={{ marginTop: "1rem" }}>
                          <Typography varient="subtitle2" color="textSecondary">
                            Advantage of our secure Login
                          </Typography>
                          <List>
                            <ListItem className={classes.listItem}>
                              <ListItemIcon className={classes.listIcon}>
                                <LocalShippingIcon />
                              </ListItemIcon>
                              <ListItemText primary="Easily Truk Orders, Hassle Free Returns" />
                            </ListItem>
                            <ListItem className={classes.listItem}>
                              <ListItemIcon className={classes.listIcon}>
                                <NotificationsIcon />
                              </ListItemIcon>
                              <ListItemText primary="Get Relevant Alerts" />
                            </ListItem>
                            <ListItem className={classes.listItem}>
                              <ListItemIcon className={classes.listIcon}>
                                <StarIcon />
                              </ListItemIcon>
                              <ListItemText primary="WishList, Reviews, Rating and More" />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={adress}
                    className={classes.accordionRoot}
                  >
                    <AccordionSummary
                      disableSpacing
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={classes.accordionSummary}
                    >
                      <Box display="flex" alignItems="center">
                        <Paper
                          square
                          className={classes.arrodinationNumber}
                          align="center"
                        >
                          <Typography
                            style={{
                              fontWeight: "bold",
                              color: "#0275d8",
                              marginTop: "2px",
                            }}
                          >
                            2
                          </Typography>
                        </Paper>
                        <Typography style={{ fontWeight: "bold" }}>
                          DELIVERY ADRESS
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={summary}
                    className={classes.accordionRoot}
                  >
                    <AccordionSummary
                      disableSpacing
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={classes.accordionSummary}
                    >
                      <Box display="flex" alignItems="center">
                        <Paper
                          square
                          className={classes.arrodinationNumber}
                          align="center"
                        >
                          <Typography
                            style={{
                              fontWeight: "bold",
                              color: "#0275d8",
                              marginTop: "2px",
                            }}
                          >
                            3
                          </Typography>
                        </Paper>
                        <Typography style={{ fontWeight: "bold" }}>
                          ORDER SUMMARY
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={payment}
                    className={classes.accordionRoot}
                  >
                    <AccordionSummary
                      disableSpacing
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={classes.accordionSummary}
                    >
                      <Box display="flex" alignItems="center">
                        <Paper
                          square
                          className={classes.arrodinationNumber}
                          align="center"
                        >
                          <Typography
                            style={{
                              fontWeight: "bold",
                              color: "#0275d8",
                              marginTop: "2px",
                            }}
                          >
                            4
                          </Typography>
                        </Paper>
                        <Typography style={{ fontWeight: "bold" }}>
                          PAYMENT OPTIONS
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box display="flex" alignItems="center" m={3}>
                  <BeenhereIcon
                    style={{
                      marginRight: "1rem",
                      color: "rgba(0, 0, 0, 0.54)",
                    }}
                  />
                  <Typography variant="subtitle2" color="textSecondary">
                    Safe and Secure Payments.Easy returns.100% Authentic
                    products.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </StylesProvider>
    );
}

export default Payment
