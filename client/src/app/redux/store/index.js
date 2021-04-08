import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from '../slice/user';
import rankingReducer from '../slice/ranking';

const reducer = combineReducers({
  user: userReducer,
  ranking: rankingReducer,
});

const store = configureStore({
  reducer,
});

export default store;
