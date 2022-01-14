import { combineReducers } from 'redux';
import { competitionsReducer } from './competitionsReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  competitions: competitionsReducer,
});
