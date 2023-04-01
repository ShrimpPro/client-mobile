import { LOGIN, CHANGE_LOGIN_INPUT } from "../actions/actionType";

const initialState = {
  loginResponse: [],
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOGIN_INPUT:
      return { ...state, inputLogin: action.payload };
    default:
      return state;
  }
}
