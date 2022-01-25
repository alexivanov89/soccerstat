export const CompetitionsActions = {
  FETCH_COMPETITIONS: 'FETCH_COMPETITIONS',
  FETCH_COMPETITIONS_SUCCESS: 'FETCH_COMPETITIONS_SUCCESS',
  FETCH_COMPETITIONS_ERROR: 'FETCH_COMPETITIONS_ERROR',
  SET_FILTER_COMPETITIONS: 'SET_FILTER_COMPETITIONS',
};

export const FetchCompetitions = () => ({
  type: CompetitionsActions.FETCH_COMPETITIONS,
});

export const FetchCompetitionsSuccess = (competitions) => ({
  type: CompetitionsActions.FETCH_COMPETITIONS_SUCCESS,
  payload: competitions,
});

export const FetchCompetitionsError = (errorMessage) => ({
  type: CompetitionsActions.FETCH_COMPETITIONS_ERROR,
  payload: errorMessage,
});

export const SetFilterCompetitions = (filter) => ({
  type: CompetitionsActions.SET_FILTER_COMPETITIONS,
  payload: filter,
});
