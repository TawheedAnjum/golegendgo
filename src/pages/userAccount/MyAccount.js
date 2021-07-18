import React, { Component } from "react";

import { Container } from "@material-ui/core";
import UserInfo from "../../components/myAcoount/UserInfo";
import UserLavel from "../../components/myAcoount/UserLavel";
import AccountOption from "../../components/myAcoount/AccountOption";

class MyAccount extends Component {
  render() {
    return (
      <Container maxWidth="md" style={{ marginTop: 36 }}>
        <UserInfo />
        <div style={{ marginTop: 48 }}>
          <UserLavel />
        </div>
        <div style={{ marginTop: 48 }}>
          <AccountOption />
        </div>
      </Container>
    );
  }
}

export default MyAccount;
