import { ADD_HOBBY, ACTIVE_HOBBY } from '../actions/hobby'

const initialState = {
  data: [],
  activeId: null,
}

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOBBY:
      const clone = [...state.data]
      clone.push(action.payload)
      return {
        ...state,
        data: clone,
      }
    case ACTIVE_HOBBY:
      return {
        ...state,
        activeId: action.payload,
      }
    default:
      return state
  }
}

export default hobbyReducer
