import { combineReducers } from 'redux';
import { competitionsReducer } from './competitionsReducer';
import { errorReducer } from './errorReducer';
import { todayMatchesReducer } from './todayMatchesReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  competitions: competitionsReducer,
  todayMatches: todayMatchesReducer,
});
