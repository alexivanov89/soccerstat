import { footballService } from '../../services/footballService';
import {
  FetchTeamsLeague,
  FetchTeamsLeagueError,
  FetchTeamsLeagueSuccess,
  teamsLeagueActions,
} from '../actions/creator/teamsLeague';

const initialState = {
  teamsLeague: null,
  loading: false,
  error: '',
};

export const teamsLeagueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case teamsLeagueActions.FETCH_TEAMS_LEAGUE:
      return { ...state, loading: true };
    case teamsLeagueActions.FETCH_TEAMS_LEAGUE_SUCCESS:
      return { ...state, teamsLeague: payload, loading: false };
    case teamsLeagueActions.FETCH_TEAMS_LEAGUE_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export const fetchTeamsLeagueAsync = (id, onSuccess) => (dispatch) => {
  dispatch(FetchTeamsLeague());
  footballService
    .getTeamsLeague(id)
    .then((response) => {
      dispatch(FetchTeamsLeagueSuccess(response.data));
      onSuccess?.();
    })
    .catch((error) => dispatch(FetchTeamsLeagueError(error.message)));
};
