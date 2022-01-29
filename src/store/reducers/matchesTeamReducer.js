import { footballService } from '../../services/footballService';
import {
  FetchMatchesTeam,
  FetchMatchesTeamError,
  FetchMatchesTeamSuccess,
  matchesTeamActions,
} from '../actions/creator/matchesTeam';

const initialState = {
  matches: null,
  loading: false,
  error: '',
};

export const matchesTeamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case matchesTeamActions.FETCH_MATCHES_TEAM:
      return { ...state, loading: true, error: false };
    case matchesTeamActions.FETCH_MATCHES_TEAM_SUCCESS:
      return { ...state, matches: payload, loading: false, error: false };
    case matchesTeamActions.FETCH_MATCHES_TEAM_ERROR:
      return { ...state, error: payload, loading: false };
    case matchesTeamActions.CLEAR_MATCHES_TEAM:
      return { ...state, matches: null };
    default:
      return state;
  }
};

export const fetchMatchesTeamAsync = (id, filters) => (dispatch) => {
  dispatch(FetchMatchesTeam());
  footballService
    .getMatchesTeam(id, filters)
    .then((response) => {
      dispatch(FetchMatchesTeamSuccess(response.data));
    })
    .catch((error) => dispatch(FetchMatchesTeamError(error.message)));
};
