import { createSlice } from '@reduxjs/toolkit';
import api from '../../../config/api';

const ranking = createSlice({
  name: 'ranking',
  initialState: {
    allRanking: null,
    ranking: null,
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
    newRankingSuccess: (state, action) => {
      state.ranking = action.payload;
    },
    saveAllRanking: (state, action) => {
      state.allRanking = action.payload;
      state.ranking = null;
    },
  },
});

export default ranking.reducer;

const {
  newRankingSuccess,
  saveAllRanking,
  requestStarted,
  requestSuccess,
  requestError,
} = ranking.actions;

export const newRanking = (model) => async (dispatch) => {
  try {
    dispatch(requestStarted());

    const response = await api.post('/ranking/', model);

    dispatch(newRankingSuccess(response.data));
    return dispatch(requestSuccess());
  } catch (e) {
    return dispatch(requestError(e.message));
  }
};

export const getRanking = () => async (dispatch) => {
  try {
    dispatch(requestStarted());

    const response = await api.get('/ranking/');

    dispatch(saveAllRanking(response.data));
    return dispatch(requestSuccess());
  } catch (e) {
    return dispatch(requestError(e.message));
  }
};
