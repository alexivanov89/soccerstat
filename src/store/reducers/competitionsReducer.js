import { footballService } from '../../services/footballService';
import {
  CompetitionsActions,
  FetchCompetitions,
  FetchCompetitionsError,
  FetchCompetitionsSuccess,
} from '../actions/creator/competitions';

const initialState = {
  competitions: null,
  filter: null,
  loading: false,
  error: '',
};

export const competitionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CompetitionsActions.FETCH_COMPETITIONS:
      return { ...state, loading: true, error: false };
    case CompetitionsActions.FETCH_COMPETITIONS_SUCCESS:
      return { ...state, competitions: payload, loading: false, error: false };
    case CompetitionsActions.FETCH_COMPETITIONS_ERROR:
      return { ...state, error: payload, loading: false };
    case CompetitionsActions.SET_FILTER_COMPETITIONS:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export const fetchCompetitionsAsync = (id) => (dispatch) => {
  dispatch(FetchCompetitions());
  footballService
    .getCompetition(id)
    .then((response) => {
      dispatch(FetchCompetitionsSuccess(response.data));
    })
    .catch((error) => dispatch(FetchCompetitionsError(error.message)));
};

export const getCompetitionsSelector = (state) => {
  if (state.competitions.filter) {
    return state.competitions.competitions.competitions.filter(
      (item) => item.id === state.competitions.filter,
    );
  }
  if (state.competitions.competitions) {
    return state.competitions.competitions.competitions;
  }
  return [];
};
