import {
  SAVE_USER, LOG_OUT
} from '../actions/types.js';

const INITIAL_STATE = {
  user: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER:
      return  Object.assign({}, state, {user: action.payload});
    case LOG_OUT:
      return  Object.assign({}, state, {user: {}});
    default:
      return state;
  }
}
