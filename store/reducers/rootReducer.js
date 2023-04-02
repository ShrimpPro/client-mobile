import { combineReducers } from "redux";
import loginReducer from "./login";
import registerReducer from "./register";
import pondReducer from "./pond";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  ponds: pondReducer
});

export default rootReducer;
