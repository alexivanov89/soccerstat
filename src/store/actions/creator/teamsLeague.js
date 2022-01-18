export const teamsLeagueActions = {
  FETCH_TEAMS_LEAGUE: 'FETCH_TEAMS_LEAGUE',
  FETCH_TEAMS_LEAGUE_SUCCESS: 'FETCH_TEAMS_LEAGUE_SUCCESS',
  FETCH_TEAMS_LEAGUE_ERROR: 'FETCH_TEAMS_LEAGUE_ERROR',
};

export const FetchTeamsLeague = () => ({
  type: teamsLeagueActions.FETCH_TEAMS_LEAGUE,
});

export const FetchTeamsLeagueSuccess = (teams) => ({
  type: teamsLeagueActions.FETCH_TEAMS_LEAGUE_SUCCESS,
  payload: teams,
});

export const FetchTeamsLeagueError = (errorMessage) => ({
  type: teamsLeagueActions.FETCH_TEAMS_LEAGUE_ERROR,
  payload: errorMessage,
});
