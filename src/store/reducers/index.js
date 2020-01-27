import { GET_CURRENT_BOND, LOADING, FETCH_ERROR, TIME_PERIOD } from "../types/bonds";

const initialState = {
  loading: false,
  bonds: [],
  currentBond:[],
  fetchError: false,
  period:'year',
};
const bondReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_CURRENT_BOND:
      return {
        ...state,
        currentBond: action.payload
      };
      case TIME_PERIOD:
      return {
        ...state,
        period: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchError: action.payload
      };
    default:
      return state;
  }
};

export default bondReducer;
