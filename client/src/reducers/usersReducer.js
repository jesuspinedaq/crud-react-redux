import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.payload;
    case types.SAVE_USERS_SUCCESS:
      return [
        ...state, Object.assign({}, action.payload),
      ];
    case types.UPDATE_USERS_SUCCESS:
      return [
        ...state.filter(user => user.id !== action.id),
        Object.assign({}, action.user),
      ];
    case types.DELETE_USERS_SUCCESS:
      return [
        ...state.filter(user =>
          user.id !== action.payload)];
    default:
      return state;
  }
}
