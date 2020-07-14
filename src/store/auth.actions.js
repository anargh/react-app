import UserService from "../api/user-service";
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const REGISTER_USER_REQUEST = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export function loginUser() {
  return {
    type: LOGIN_USER_REQUEST,
  };
}

export function loginUserSuccess(token) {
  return {
    type: LOGIN_USER_SUCCESS,
    token,
  };
}

export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_ERROR,
    error,
  };
}

// Thunk middleware
export function doLogin({ email, password }) {
  return (dispatch) => {
    dispatch(loginUser());
    return UserService.authenticate({ email, password })
      .then((response) => dispatch(loginUserSuccess(response.data)))
      .catch((error) => dispatch(loginUserFailure(error.message)));
  };
}

export function registerUser() {
  return {
    type: REGISTER_USER_REQUEST,
  };
}

export function registerUserSuccess(token) {
  return {
    type: REGISTER_USER_SUCCESS,
    token,
  };
}

export function registerUserError(error) {
  return {
    type: REGISTER_USER_ERROR,
    error,
  };
}

export function doRegistration({ name, email, password }) {
  return (dispatch) => {
    dispatch(registerUser());
    return UserService.register({ name, email, password })
      .then((response) => dispatch(registerUserSuccess(response.data)))
      .catch((error) => dispatch(registerUserError(error.message)));
  };
}
