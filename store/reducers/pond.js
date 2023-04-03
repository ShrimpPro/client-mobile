import { CHANGE_LOADING_PONDS, FETCH_PONDS, FETCH_POND_DETAIL } from "../actions/actionType";

const initialState = { ponds: [], pond: {}, loading: false }

function pondReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PONDS:
      return { ...state, ponds: action.payload }
    case CHANGE_LOADING_PONDS:
      return { ...state, loading: action.payload }
    case FETCH_POND_DETAIL:
      return { ...state, pond: action.payload }
    default:
      return state
  }
}

export default pondReducer;