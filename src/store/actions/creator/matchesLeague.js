export const matchesLeagueActions = {
  FETCH_MATCHES_LEAGUE: 'FETCH_MATCHES_LEAGUE',
  FETCH_MATCHES_LEAGUE_SUCCESS: 'FETCH_MATCHES_LEAGUE_SUCCESS',
  FETCH_MATCHES_LEAGUE_ERROR: 'FETCH_MATCHES_LEAGUE_ERROR',
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
