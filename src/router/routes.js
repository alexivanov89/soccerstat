import { lazy } from 'react';

const ListOfLeaguesCompetitions = lazy(() =>
  import('../pages/ListOfLeaguesCompetitions/ListOfLeaguesCompetitions'),
);
const ListOfCommands = lazy(() => import('../pages/ListOfCommands/ListOfCommands'));
const LeagueCalendar = lazy(() => import('../pages/LeagueCalendar/LeagueCalendar'));
const TeamCalendar = lazy(() => import('../pages/TeamCalendar/TeamCalendar'));

export const publicRoutes = [
  { path: '/home', exact: true, component: ListOfLeaguesCompetitions },
  { path: '/listOfCommands', exact: true, component: ListOfCommands },
  { path: '/leagueCalendar/:id', exact: true, component: LeagueCalendar },
  { path: '/teamCalendar', exact: true, component: TeamCalendar },
];
