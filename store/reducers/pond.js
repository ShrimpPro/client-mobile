import { CHANGE_LOADING_PONDS, FETCH_PONDS } from "../actions/actionType";

const initialState = { ponds: [], loading: false }

function pondReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PONDS:
      return { ...state, ponds: action.payload }
    case CHANGE_LOADING_PONDS:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default pondReducer;