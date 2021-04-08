import { createSlice } from '@reduxjs/toolkit';
import api from '../../../config/api';

const user = createSlice({
  name: 'user',
  initialState: {
    user: null,
    requestStarted: false,
    requestSuccess: false,
    requestError: null,
  },
  reducers: {
    requestStarted: (state, action) => {
      state.requestStarted = true;
      state.requestSuccess = false;
      state.requestError = null;
    },
    requestSuccess: (state, action) => {
      state.requestStarted = false;
      state.requestSuccess = true;
      state.requestError = null;
    },
    requestError: (state, action) => {
      state.requestStarted = false;
      state.requestSuccess = false;
      state.requestError = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
});

export default user.reducer;

const {
  loginSuccess,
  logoutSuccess,
  requestStarted,
  requestSuccess,
  requestError,
} = user.actions;

export const login = (username) => async (dispatch) => {
  try {
    dispatch(requestStarted());

    const response = await api.post('/user/', { name: username });

    dispatch(loginSuccess(response.data));
    dispatch(requestSuccess());
  } catch (e) {
    return dispatch(requestError(e.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(requestStarted());
    dispatch(logoutSuccess());
    dispatch(requestSuccess());
  } catch (e) {
    return dispatch(requestError(e.message));
  }
};
