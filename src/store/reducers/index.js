import { combineReducers } from 'redux';
import { competitionsReducer } from './competitionsReducer';
import { errorReducer } from './errorReducer';
import { matchesLeagueReducer } from './matchesLeagueReducer';
import { matchesTeamReducer } from './matchesTeamReducer';
import { teamsLeagueReducer } from './teamsLeagueReducer';
import { todayMatchesReducer } from './todayMatchesReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  competitions: competitionsReducer,
  todayMatches: todayMatchesReducer,
  matchesLeague: matchesLeagueReducer,
  teamsLeague: teamsLeagueReducer,
  matchesTeam: matchesTeamReducer,
});
