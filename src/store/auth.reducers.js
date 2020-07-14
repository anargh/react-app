import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./auth.actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

function auth(
  state = {
    auth: {
      inProgress: false,
      isAuthenticated: false,
      token: "",
      error: "",
    },
  },
  action
) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        auth: {
          inProgress: true,
          error: "",
        },
      };
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        auth: {
          inProgress: false,
          isAuthenticated: true,
          token: action.token,
        },
      };
    case LOGIN_USER_ERROR:
    case REGISTER_USER_ERROR:
      return {
        ...state,
        auth: {
          inProgress: false,
          isAuthenticated: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
}

const persistedAuthReducer = persistReducer(persistConfig, auth);

export default persistedAuthReducer;
