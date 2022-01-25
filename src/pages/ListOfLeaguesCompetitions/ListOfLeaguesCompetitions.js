import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCompetitionsAsync,
  getCompetitionsSelector,
} from '../../store/reducers/competitionsReducer';
import { fetchTodayMatchesAsync } from '../../store/reducers/todayMatchesReducer';
import { ListData } from '../../components/ListData';
import { ListMatches } from '../../components/ListMatches';
import { SetFilterCompetitions } from '../../store/actions/creator/competitions';
import { routesPath } from '../../router/routes';

const ListOfLeaguesCompetitions = () => {
  const dispatch = useDispatch();
  const competitions = useSelector(getCompetitionsSelector);
  const todayMatches = useSelector(({ todayMatches }) => todayMatches);
  const prepareCompetitions = competitions.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    dispatch(fetchTodayMatchesAsync());
    dispatch(fetchCompetitionsAsync());
  }, []);

  const handleChange = useCallback(
    (value) => {
      dispatch(SetFilterCompetitions(value?.id));
    },
    [dispatch],
  );

  const listOptions = {
    title: 'Список лиг',
    subheader: 'Чемпионаты ведущих стран Европы',
    autocompleteOptions: {
      label: 'Найти Чемпионат',
      getOptionLabel: (option) => `${option.name}, ${option.area.countryCode}`,
    },
    table: {
      tableColumns: ['Название лиги', 'Страна', 'Календарь лиги'],
      linkPathFirstColummns: routesPath.listOfTeams,
      linkPathLastColummns: routesPath.leagueCalendar,
      imgOption: 'ensignUrl',
    },
  };

  return (
    <>
      <ListMatches todayMatches={todayMatches} />
      <ListData list={prepareCompetitions} listOptions={listOptions} handleChange={handleChange} />
    </>
  );
};

export default ListOfLeaguesCompetitions;
