export const ErrorAction = {
  SET_ERROR: 'SET_ERROR',
};

export const SetError = (error) => ({
  type: ErrorAction.SET_ERROR,
  payload: error,
});
