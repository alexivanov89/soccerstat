import { combineReducers } from 'redux';
import { competitionsReducer } from './competitionsReducer';
import { errorReducer } from './errorReducer';
import { matchesLeagueReducer } from './matchesLeagueReducer';
import { matchesTeamReducer } from './matchesTeamReducer';
import { todayMatchesReducer } from './todayMatchesReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  competitions: competitionsReducer,
  todayMatches: todayMatchesReducer,
  matchesLeague: matchesLeagueReducer,
  matchesTeam: matchesTeamReducer,
});
