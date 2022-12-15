import {combineReducers} from '@reduxjs/toolkit';
import users from './user';
import userData from './userData';

export default combineReducers({
  users: users,
  userData: userData,
});
