export const matchesTeamActions = {
  FETCH_MATCHES_TEAM: 'FETCH_MATCHES_TEAM',
  FETCH_MATCHES_TEAM_SUCCESS: 'FETCH_MATCHES_TEAM_SUCCESS',
  FETCH_MATCHES_TEAM_ERROR: 'FETCH_MATCHES_TEAM_ERROR',
};

export const FetchMatchesTeam = () => ({
  type: matchesTeamActions.FETCH_MATCHES_TEAM,
});

export const FetchMatchesTeamSuccess = (matches) => ({
  type: matchesTeamActions.FETCH_MATCHES_TEAM_SUCCESS,
  payload: matches,
});

export const FetchMatchesTeamError = (errorMessage) => ({
  type: matchesTeamActions.FETCH_MATCHES_TEAM_ERROR,
  payload: errorMessage,
});
