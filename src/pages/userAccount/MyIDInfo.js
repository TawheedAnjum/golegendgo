import React, { Component } from "react";

import { Container, Paper } from "@material-ui/core";

import AccountSummary from "../../components/accountSummary/AccountSummary";
import AccountInputInfo from "../../components/accountSummary/AccountInputInfo";

class MyIDInfo extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="md" style={{ marginTop: 36, paddingLeft: 0, paddingRight: 0 }}>
          <div>
            <Paper elevation={3}>
              <AccountSummary />
            </Paper>
          </div>
          <div style={{ marginTop: 48 }}>
            <Paper elevation={3}>
              <AccountInputInfo />
            </Paper>
          </div>
        </Container>
      </div>
    );
  }
}

export default MyIDInfo;
