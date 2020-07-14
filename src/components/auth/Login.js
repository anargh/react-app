import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin } from "../../store/auth.actions";

function Login(props) {
  let [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(loginInfo);
  }

  function handleChange(event) {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      {props.error ? (
        <div className="alert alert-danger" role="alert">
          Your username or password is inavlid.
        </div>
      ) : null}
      {props.isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <>
          <h3 className="w-100">Login</h3>
          <LoginForm
            {...loginInfo}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    ...auth,
  };
};

const mapDispatchToProps = {
  handleLogin: doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
