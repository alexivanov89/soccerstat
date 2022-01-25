import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ListData } from '../../components/ListData';
import { routesPath } from '../../router/routes';
import { SetFilterTeamsLeague } from '../../store/actions/creator/teamsLeague';
import {
  fetchTeamsLeagueAsync,
  getTeamsLeagueSelector,
} from '../../store/reducers/teamsLeagueReducer';

const ListOfTeams = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const teamsLeagueSelected = useSelector(getTeamsLeagueSelector);
  const { teamsLeague } = useSelector(({ teamsLeague }) => teamsLeague);

  const prepareTeamsLeague = teamsLeagueSelected.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    if (location.state) {
      dispatch(fetchTeamsLeagueAsync(location.state.id));
    }
  }, []);

  const handleChange = useCallback(
    (value) => {
      dispatch(SetFilterTeamsLeague(value?.id));
    },
    [dispatch],
  );

  const listOptions = {
    title: 'Список команд',
    subheader: `Команды ${teamsLeague?.competition?.name}`,
    autocompleteOptions: {
      label: 'Найти команду',
      getOptionLabel: (option) => `${option.name}, ${option.area.name}`,
    },
    table: {
      tableColumns: ['Название команды', 'Страна', 'Календарь команды'],
      linkPathFirstColummns: null,
      linkPathLastColummns: routesPath.teamCalendar,
      imgOption: 'crestUrl',
    },
  };

  return (
    <ListData list={prepareTeamsLeague} listOptions={listOptions} handleChange={handleChange} />
  );
};

export default ListOfTeams;
