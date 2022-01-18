import { ErrorAction } from '../actions/creator/error';

const initialState = {
  value: '',
};

export const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ErrorAction.SET_ERROR:
      return { ...state, value: payload };
    default:
      return state;
  }
};
