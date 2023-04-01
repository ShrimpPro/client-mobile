import { combineReducers } from "redux";
import loginReducer from "./login";
import registerReducer from "./register";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
