import { footballService } from '../../services/footballService';
import {
  CompetitionsActions,
  FetchCompetitions,
  FetchCompetitionsError,
  FetchCompetitionsSuccess,
} from '../actions/creator/competitions';

const initialState = {
  competitions: [],
  loading: false,
  error: '',
};

export const competitionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CompetitionsActions.FETCH_COMPETITIONS:
      return { ...state, loading: true };
    case CompetitionsActions.FETCH_COMPETITIONS_SUCCESS:
      return { ...state, competitions: payload, loading: false };
    case CompetitionsActions.FETCH_COMPETITIONS_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export const fetchCompetitionsAsync = () => (dispatch) => {
  dispatch(FetchCompetitions());
  footballService
    .getCompetition()
    // .then((response) => console.log(response))
    .then((response) => dispatch(FetchCompetitionsSuccess(response.data)))
    .catch((error) => dispatch(FetchCompetitionsError(error.message)));
};
