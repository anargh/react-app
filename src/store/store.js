import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore } from "redux-persist";

import authReducer from "./auth.reducers";
import saveAuthToken from "./middleware/save-auth-token";

const store = createStore(
  authReducer,
  applyMiddleware(thunkMiddleware, saveAuthToken)
);
const persistor = persistStore(store);

export { store, persistor };
