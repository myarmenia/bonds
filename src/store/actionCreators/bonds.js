import { setLoading, getCurrentBond } from "../actions/bonds";
import mockApiData from "../mocks/mockApiData.json";

export const fetchBond = () => dispatch => {
  dispatch(setLoading(true));

  setTimeout(() => {
    let mockSortedByDate = mockApiData.sort((a, b) => {
      let aDate = new Date(a.date).getTime();
      let bDate = new Date(b.date).getTime();
      return aDate - bDate;
    });
    dispatch(getCurrentBond(mockSortedByDate));
    dispatch(setLoading(false));
    // console.log(mockApiData)
  }, 100);
};
