import actionType from './actionType';

const initialState = {
  state: null
}


const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_STATE:
      return state;

    case actionType.SAVE_STATE:
      return {
        ...state,
        state: action.payload
      }

    case actionType.RESET_STATE:
      return {
        ...state,
        state: action.payload
      }

    default:
      return state;
  }
}

export default auth;