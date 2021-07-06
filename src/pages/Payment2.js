import React, {useState} from 'react';

import {
  Container,
  Grid,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import useStyles from '../assets/styleJS/PaymentStyle2';
import BeenhereIcon from "@material-ui/icons/Beenhere";


function Payment2(props) {
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
      <div
        style={{ backgroundColor: "#f1f3f6", height: "100vh", width: "100vw" }}
      >
        <Container maxWidth="lg" style={{ paddingTop: "48px" }}>
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              <Box>
                <Paper>
                  <Accordion
                    className={classes.expanded}
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
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Paper>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box display="flex" alignItems="center" m={3}>
                <BeenhereIcon
                  style={{ marginRight: "1rem", color: "rgba(0, 0, 0, 0.54)" }}
                />
                <Typography variant="subtitle2" color="textSecondary">
                  Safe and Secure Payments.Easy returns.100% Authentic products.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default Payment2
