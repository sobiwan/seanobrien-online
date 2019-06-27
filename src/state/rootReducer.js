import { combineReducers } from 'redux';
import users from './users/reducer';


const appReducer = combineReducers({
  users,
});

export default (state, action) =>
  appReducer(state, action);
