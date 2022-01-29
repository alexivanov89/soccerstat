export const matchesLeagueActions = {
  FETCH_MATCHES_LEAGUE: 'FETCH_MATCHES_LEAGUE',
  FETCH_MATCHES_LEAGUE_SUCCESS: 'FETCH_MATCHES_LEAGUE_SUCCESS',
  FETCH_MATCHES_LEAGUE_ERROR: 'FETCH_MATCHES_LEAGUE_ERROR',
  CLEAR_MATCHES_LEAGUE: 'CLEAR_MATCHES_LEAGUE',
};

export const FetchMatchesLeague = () => ({
  type: matchesLeagueActions.FETCH_MATCHES_LEAGUE,
});

export const FetchMatchesLeagueSuccess = (matches) => ({
  type: matchesLeagueActions.FETCH_MATCHES_LEAGUE_SUCCESS,
  payload: matches,
});

export const FetchMatchesLeagueError = (errorMessage) => ({
  type: matchesLeagueActions.FETCH_MATCHES_LEAGUE_ERROR,
  payload: errorMessage,
});

export const ClearMatchesLeague = () => ({
  type: matchesLeagueActions.CLEAR_MATCHES_LEAGUE,
  payload: null,
});
