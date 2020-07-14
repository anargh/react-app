import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function AuthRoute(props) {
  if (props.auth.isAuthenticated) {
    return <>{props.children}</>;
  } else {
    return <Redirect to="/" />;
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapState)(AuthRoute);
