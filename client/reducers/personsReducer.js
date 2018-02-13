import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function personsReducer(state = initialState.persons, action) {
  switch (action.type) {
    case types.LOAD_PERSONS_SUCCESS:
      return action.payload;
    case types.SAVE_PERSON_SUCCESS:
      return [
        ...state, Object.assign({}, action.payload),
      ];
    case types.UPDATE_PERSON_SUCCESS:
      return [
        ...state.filter(person => person.id !== action.id),
        Object.assign({}, action.person),
      ];
    case types.DELETE_PERSON_SUCCESS:
      return [
        ...state.filter(person =>
          person.id !== action.payload)];
    default:
      return state;
  }
}
