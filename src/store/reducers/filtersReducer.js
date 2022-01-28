import { FiltersAction } from '../actions/creator/filters';

const initialState = {
  dateFrom: null, //YYYY-MM-dd
  dateTo: null,
};

export const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FiltersAction.SET_DATE_FROM:
      return { ...state, dateFrom: payload };
    case FiltersAction.SET_DATE_TO:
      return { ...state, dateTo: payload };
    default:
      return state;
  }
};
