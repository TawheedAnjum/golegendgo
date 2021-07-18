import React, { Component } from "react";
import { Container, Paper } from "@material-ui/core";
import CheckBalanceTable from "../../components/checkBalance/CheckBalanceTable";

export class CheckBalance extends Component {
  render() {
    return (
      <div style={{ marginTop: 48 }}>
        <Container maxWidth="md">
          <Paper elevation={3} style={{ borderRadius: "1.5rem" }}>
            <CheckBalanceTable />
          </Paper>
        </Container>
      </div>
    );
  }
}

export default CheckBalance;
