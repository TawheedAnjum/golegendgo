import React, { Component } from "react";

import { Container, Paper } from "@material-ui/core";
import UserProfileInfo from "../components/profile/UserProfileInfo";
import UserAllInfo from "../components/profile/UserAllInfo";

class UserProfile extends Component {
  render() {
    return (
      <Container maxWidth="md">
        <div style={{ marginTop: 48, marginBottom: 40 }}>
          <UserProfileInfo />
        </div>
        <div style={{ marginBottom: 48 }}>
          <Paper elevation={3}>
            <UserAllInfo />
          </Paper>
        </div>
      </Container>
    );
  }
}

export default UserProfile;
