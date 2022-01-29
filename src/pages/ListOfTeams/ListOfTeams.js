import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { ListData } from '../../components/ListData';
import {
  fetchTeamsLeagueAsync,
  getTeamsLeagueSelector,
} from '../../store/reducers/teamsLeagueReducer';
import {
  fetchCompetitionsAsync,
  getCompetitionsSelector,
} from '../../store/reducers/competitionsReducer';
import { MyAutocomplete } from '../../components/MyAutocomplete';
import { SetFilterCompetitions } from '../../store/actions/creator/competitions';
import { routesPath } from '../../router/routes';
import { ClearTeamsLeague, SetFilterTeamsLeague } from '../../store/actions/creator/teamsLeague';

const ListOfTeams = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const teamsLeagueSelected = useSelector(getTeamsLeagueSelector);
  const { teamsLeague, loading, error } = useSelector(({ teamsLeague }) => teamsLeague);
  const competitions = useSelector(getCompetitionsSelector);

  const prepareCompetitions = competitions.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });

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
    if (location.state?.id) {
      dispatch(fetchTeamsLeagueAsync(location.state.id));
    }
    return () => {
      dispatch(SetFilterCompetitions(null));
      dispatch(ClearTeamsLeague());
    };
  }, [location.state?.id]);

  useEffect(() => {
    dispatch(fetchCompetitionsAsync());
    return () => {
      dispatch(ClearTeamsLeague());
    };
  }, []);

  const handleChange = useCallback(
    (value) => {
      dispatch(SetFilterCompetitions(value?.id));
      history.push({
        pathname: routesPath.listOfTeams,
        state: { id: `${value?.id}` },
      });
    },
    [dispatch],
  );

  const handleChangeListData = useCallback(
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
    <>
      {location.state?.id ? (
        <>
          {loading && 'loading'}
          {!loading && !error && (
            <ListData
              list={prepareTeamsLeague}
              listOptions={listOptions}
              handleChange={handleChangeListData}
              maxHeight="calc(95vh - 220px)"
            />
          )}
          {error && (
            <Typography variant="h1" component="h2" color="white" align="center">
              нет данных
            </Typography>
          )}
        </>
      ) : (
        <Card
          sx={{
            borderRadius: 4,
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <MyAutocomplete
            getOptionLabel={(option) => `${option.name}, ${option.area.countryCode}`}
            options={prepareCompetitions}
            onChange={handleChange}
            label={'Найти Чемпионат'}
          />
          <Typography variant="h5" color="initial">
            Выберите Чемпионат
          </Typography>
        </Card>
      )}
    </>
  );
};

export default ListOfTeams;
