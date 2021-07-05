import React from "react";

import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import BeenhereIcon from "@material-ui/icons/Beenhere";

function PriceDetails(props) {
  return (
    <div>
      <Paper>
        <Box
          style={{
            padding: "1rem 1.2rem",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Typography variant="h6" color="textSecondary">
            Price Detais
          </Typography>
        </Box>

        {/* list */}
        <div
          style={{
            padding: ".5rem",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <List>
            <ListItem>
              <Typography variant="body1">Price( 1 Item)</Typography>
              <ListItemSecondaryAction>
                <Typography variant="body1" style={{ fontWeight: "500" }}>
                  $1,199
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Discount</Typography>
              <ListItemSecondaryAction>
                <Typography variant="body1" style={{ color: "green" }}>
                  -$820
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Delivery Charges</Typography>
              <ListItemSecondaryAction>
                <Typography variant="body1" style={{ color: "green" }}>
                  FREE
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
        {/* list finished */}

        {/* total ammount */}
        <div
          style={{
            padding: ".3rem .5rem",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <List>
            <ListItem>
              <Typography variant="h6" style={{ fontWeight: "500" }}>
                Total Amount
              </Typography>
              <ListItemSecondaryAction>
                <Typography variant="h6" style={{ fontWeight: "500" }}>
                  $1,199
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
        {/* total ammount finished */}

        {/* save money */}
        <div style={{ padding: "1rem 1.5rem" }}>
          <Typography
            variant="body1"
            style={{ fontWeight: "500", color: "green" }}
          >
            You will save ₹820 on this order
          </Typography>
        </div>
      </Paper>
      {/* footer */}
      <Box display="flex" alignItems="center" m={3}>
        <BeenhereIcon
          style={{ marginRight: "1rem", color: "rgba(0, 0, 0, 0.54)" }}
        />
        <Typography variant="subtitle2" color="textSecondary">
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </Typography>
      </Box>
    </div>
  );
}

export default PriceDetails;
