export const teamsLeagueActions = {
  FETCH_TEAMS_LEAGUE: 'FETCH_TEAMS_LEAGUE',
  FETCH_TEAMS_LEAGUE_SUCCESS: 'FETCH_TEAMS_LEAGUE_SUCCESS',
  FETCH_TEAMS_LEAGUE_ERROR: 'FETCH_TEAMS_LEAGUE_ERROR',
  SET_FILTER_TEAMS_LEAGUE: 'SET_FILTER_TEAMS_LEAGUE',
  CLEAR_TEAMS_LEAGUE: 'CLEAR_TEAMS_LEAGUE',
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

export const SetFilterTeamsLeague = (filter) => ({
  type: teamsLeagueActions.SET_FILTER_TEAMS_LEAGUE,
  payload: filter,
});

export const ClearTeamsLeague = () => ({
  type: teamsLeagueActions.CLEAR_TEAMS_LEAGUE,
  payload: null,
});
