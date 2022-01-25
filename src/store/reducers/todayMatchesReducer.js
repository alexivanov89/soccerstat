import { footballService } from '../../services/footballService';
import {
  FetchTodayMatches,
  FetchTodayMatchesError,
  FetchTodayMatchesSuccess,
  todayMatchesActions,
} from '../actions/creator/todayMatches';

const initialState = {
  matches: null,
  loading: false,
  error: '',
};

export const todayMatchesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case todayMatchesActions.FETCH_TODAY_MATCHES:
      return { ...state, loading: true };
    case todayMatchesActions.FETCH_TODAY_MATCHES_SUCCESS:
      return { ...state, matches: payload, loading: false };
    case todayMatchesActions.FETCH_TODAY_MATCHES_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export const fetchTodayMatchesAsync = (id) => (dispatch) => {
  dispatch(FetchTodayMatches());
  footballService
    .getMatches()
    .then((response) => {
      dispatch(FetchTodayMatchesSuccess(response.data));
    })
    .catch((error) => dispatch(FetchTodayMatchesError(error.message)));
};
