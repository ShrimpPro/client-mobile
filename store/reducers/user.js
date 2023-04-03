import {
  CHANGE_LOADING_USERS,
  DESTROY_USERS,
  FETCH_USERS,
  FETCH_USER_DETAIL,
} from "../actions/actionType";

const initialState = { users: [], user: {}, loading: false };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case CHANGE_LOADING_USERS:
      return { ...state, loading: action.payload };
    case FETCH_USER_DETAIL:
      return { ...state, user: action.payload };
    case DESTROY_USERS:
      return { state: initialState };
    default:
      return state;
  }
}

export default userReducer;
