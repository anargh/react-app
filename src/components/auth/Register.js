import React from "react";
import RegisterForm from "./RegisterForm";
import { connect } from "react-redux";
import { doRegistration } from "../../store/auth.actions";
import { Redirect } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleRegistration(this.state);
  }

  render() {
    return (
      <>
        {this.props.error ? (
          <div className="alert alert-danger" role="alert">
            Your username or password is inavlid.
          </div>
        ) : null}
        {this.props.isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <>
            <h3>Register</h3>
            <RegisterForm
              {...this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    ...auth,
  };
};

const mapDispatch = {
  handleRegistration: doRegistration,
};

export default connect(mapStateToProps, mapDispatch)(Register);
