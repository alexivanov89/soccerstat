import { footballService } from '../../services/footballService';
import {
  FetchTeamsLeague,
  FetchTeamsLeagueError,
  FetchTeamsLeagueSuccess,
  teamsLeagueActions,
} from '../actions/creator/teamsLeague';

const initialState = {
  teamsLeague: null,
  filter: null,
  loading: false,
  error: '',
};

export const teamsLeagueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case teamsLeagueActions.FETCH_TEAMS_LEAGUE:
      return { ...state, loading: true, error: false };
    case teamsLeagueActions.FETCH_TEAMS_LEAGUE_SUCCESS:
      return { ...state, teamsLeague: payload, loading: false, error: false };
    case teamsLeagueActions.FETCH_TEAMS_LEAGUE_ERROR:
      return { ...state, error: payload, loading: false };
    case teamsLeagueActions.SET_FILTER_TEAMS_LEAGUE:
      return { ...state, filter: payload };
    case teamsLeagueActions.CLEAR_TEAMS_LEAGUE:
      return { ...state, teamsLeague: null };
    default:
      return state;
  }
};

export const fetchTeamsLeagueAsync = (id) => (dispatch) => {
  dispatch(FetchTeamsLeague());
  footballService
    .getTeamsLeague(id)
    .then((response) => {
      dispatch(FetchTeamsLeagueSuccess(response.data));
    })
    .catch((error) => dispatch(FetchTeamsLeagueError(error.message)));
};

export const getTeamsLeagueSelector = (state) => {
  if (state.teamsLeague.filter) {
    return state.teamsLeague.teamsLeague.teams.filter(
      (item) => item.id === state.teamsLeague.filter,
    );
  }
  if (state.teamsLeague.teamsLeague) {
    return state.teamsLeague.teamsLeague.teams;
  }
  return [];
};
