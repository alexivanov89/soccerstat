export const todayMatchesActions = {
  FETCH_TODAY_MATCHES: 'FETCH_TODAY_MATCHES',
  FETCH_TODAY_MATCHES_SUCCESS: 'FETCH_TODAY_MATCHES_SUCCESS',
  FETCH_TODAY_MATCHES_ERROR: 'FETCH_TODAY_MATCHES_ERROR',
};

export const FetchTodayMatches = () => ({
  type: todayMatchesActions.FETCH_TODAY_MATCHES,
});

export const FetchTodayMatchesSuccess = (matches) => ({
  type: todayMatchesActions.FETCH_TODAY_MATCHES_SUCCESS,
  payload: matches,
});

export const FetchTodayMatchesError = (errorMessage) => ({
  type: todayMatchesActions.FETCH_TODAY_MATCHES_ERROR,
  payload: errorMessage,
});
