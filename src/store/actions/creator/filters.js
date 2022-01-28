export const FiltersAction = {
  SET_DATE_FROM: 'SET_DATE_FROM',
  SET_DATE_TO: 'SET_DATE_TO',
};

export const SetDateFrom = (date) => ({
  type: FiltersAction.SET_DATE_FROM,
  payload: date,
});

export const SetDateTo = (date) => ({
  type: FiltersAction.SET_DATE_TO,
  payload: date,
});
