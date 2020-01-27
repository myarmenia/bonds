import { GET_CURRENT_BOND, LOADING, FETCH_ERROR, TIME_PERIOD } from "../types/bonds";

export const setLoading = payload => ({
  type: LOADING,
  payload
});

export const getCurrentBond = payload => ({
  type: GET_CURRENT_BOND,
  payload
});

export const setFetchError = payload => ({
  type: FETCH_ERROR,
  payload
});

export const setPeriod = payload => ({
  type: TIME_PERIOD,
  payload
});
