import { ErrorAction } from '../actions/creator/error';

const initialState = {
  error: '',
};

export const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ErrorAction.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
