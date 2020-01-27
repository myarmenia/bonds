import { createSelector } from "reselect";
import moment from "moment";

export const bondSelector = state => {
  return state.currentBond.map(bond => ({
    ...bond,
    date: new Date(bond.date)
  }));
};

const date = () => new Date();
const defaultYear = 2019;
const currentMonth = date().getMonth();

const startOfWeek = () => {
  return moment()
    .startOf("week")
    .format("D");
};

const endOfWeek = () => {
  return moment()
    .endOf("week")
    .format("D");
};

export const bondByYear = createSelector(bondSelector, bond =>
  bond.filter(b => b.date.getFullYear() === defaultYear)
);

export const bondByMonth = createSelector(bondByYear, bond =>
  bond.filter(b => b.date.getMonth() === currentMonth)
);

export const bondByWeek = createSelector(bondByMonth, bond =>
  bond.filter(
    b => b.date.getDate() >= startOfWeek() // && b.date.getDate() <= endOfWeek()
  )
);

export const periodSelector = state => state.period

export const preparedBond = createSelector(
  bondByYear,
  bondByMonth,
  bondByWeek,
  periodSelector,
  (bondY,bondM, bondW, period) => {
    if(period ==='week'){
      return bondW
    }else if(period ==='month') {
      return bondM
    } else {
      return bondY
    }
  }
)
