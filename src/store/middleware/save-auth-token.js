import { LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS } from "../auth.actions";
import { AuthService } from "../../api/auth-service";

const TOKEN_ACTIONS = [LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS];

export default (store) => (next) => (action) => {
  if (TOKEN_ACTIONS.includes(action.type)) {
    AuthService.setUserToken(action.token);
  }

  return next(action);
};
