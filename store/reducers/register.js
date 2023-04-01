import { CHANGE_REGISTER_RESPONSE } from "../actions/actionType";

const initialState = {
  registerResponse: [],
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_REGISTER_RESPONSE:
      return { ...state, inputLogin: action.payload };
    default:
      return state;
  }
}
