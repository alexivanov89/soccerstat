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
      return { ...state, loading: true };
    case matchesTeamActions.FETCH_MATCHES_TEAM_SUCCESS:
      return { ...state, matches: payload, loading: false };
    case matchesTeamActions.FETCH_MATCHES_TEAM_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export const fetchMatchesTeamAsync = (id, onSuccess) => (dispatch) => {
  dispatch(FetchMatchesTeam());
  footballService
    .getMatchesTeam(id)
    .then((response) => {
      dispatch(FetchMatchesTeamSuccess(response.data));
      onSuccess?.();
    })
    .catch((error) => dispatch(FetchMatchesTeamError(error.message)));
};
