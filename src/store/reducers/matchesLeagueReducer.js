import { footballService } from '../../services/footballService';
import {
  FetchMatchesLeague,
  FetchMatchesLeagueError,
  FetchMatchesLeagueSuccess,
  matchesLeagueActions,
} from '../actions/creator/matchesLeague';

const initialState = {
  matches: null,
  loading: false,
  error: '',
};

export const matchesLeagueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case matchesLeagueActions.FETCH_MATCHES_LEAGUE:
      return { ...state, loading: true };
    case matchesLeagueActions.FETCH_MATCHES_LEAGUE_SUCCESS:
      return { ...state, matches: payload, loading: false };
    case matchesLeagueActions.FETCH_MATCHES_LEAGUE_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export const fetchMatchesLeagueAsync = (id, onSuccess) => (dispatch) => {
  dispatch(FetchMatchesLeague());
  footballService
    .getMatchesLeague(id)
    .then((response) => {
      dispatch(FetchMatchesLeagueSuccess(response.data));
      onSuccess?.();
    })
    .catch((error) => dispatch(FetchMatchesLeagueError(error.message)));
};
