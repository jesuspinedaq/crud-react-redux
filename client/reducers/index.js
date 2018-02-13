import { combineReducers } from 'redux';
import persons from './personsReducer';


const rootReducer = combineReducers({
  persons,
});

export default rootReducer;
