import { combineReducers } from "redux";
import loginReducer from "./login";
import registerReducer from "./register";
import pondReducer from "./pond";
import userReducer from "./user";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  ponds: pondReducer,
  users: userReducer
});

export default rootReducer;
