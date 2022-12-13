import {combineReducers} from '@reduxjs/toolkit';
import users from './user';

export default combineReducers({
  users: users,
});
