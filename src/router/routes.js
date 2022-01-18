import { lazy } from 'react';

const ListOfLeaguesCompetitions = lazy(() =>
  import('../pages/ListOfLeaguesCompetitions/ListOfLeaguesCompetitions'),
);
const ListOfTeams = lazy(() => import('../pages/ListOfTeams/ListOfTeams'));
const LeagueCalendar = lazy(() => import('../pages/LeagueCalendar/LeagueCalendar'));
const TeamCalendar = lazy(() => import('../pages/TeamCalendar/TeamCalendar'));

export const routesPath = {
  home: '/home',
  listOfTeams: '/listOfTeams',
  leagueCalendar: '/leagueCalendar',
  teamCalendar: '/teamCalendar',
};

export const publicRoutes = [
  {
    path: routesPath.home,
    exact: true,
    component: ListOfLeaguesCompetitions,
    label: 'Список лиг/соревнований',
  },
  { path: routesPath.listOfTeams, exact: true, component: ListOfTeams, label: 'Список команд' },
  {
    path: routesPath.leagueCalendar,
    exact: true,
    component: LeagueCalendar,
    label: 'Календарь лиги',
  },
  {
    path: routesPath.teamCalendar,
    exact: true,
    component: TeamCalendar,
    label: 'Календарь команды',
  },
];
