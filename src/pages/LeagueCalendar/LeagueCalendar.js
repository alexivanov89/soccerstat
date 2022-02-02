import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ListCalendar } from '../../components/ListCalendar';
import { MyAutocomplete } from '../../components/MyAutocomplete';
import { fetchMatchesLeagueAsync } from '../../store/reducers/matchesLeagueReducer';
import {
  fetchCompetitionsAsync,
  getCompetitionsSelector,
} from '../../store/reducers/competitionsReducer';
import { SetFilterCompetitions } from '../../store/actions/creator/competitions';
import { ClearMatchesLeague } from '../../store/actions/creator/matchesLeague';
import { routesPath } from '../../router/routes';

const LeagueCalendar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { matches, loading, error } = useSelector(({ matchesLeague }) => matchesLeague);
  const competitions = useSelector(getCompetitionsSelector);
  const filters = useSelector(({ filters }) => filters);
  const { dateFrom, dateTo } = filters;

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
    if (location.state?.id) {
      dispatch(
        fetchMatchesLeagueAsync(location.state.id, [
          { name: 'dateFrom', value: dateFrom },
          { name: 'dateTo', value: dateTo },
        ]),
      );
    }
    return () => {
      dispatch(SetFilterCompetitions(null));
      dispatch(ClearMatchesLeague());
    };
  }, [filters, location.state?.id]);

  useEffect(() => {
    dispatch(fetchCompetitionsAsync());
    return () => {
      dispatch(ClearMatchesLeague());
    };
  }, []);

  const handleChange = useCallback(
    (value) => {
      dispatch(SetFilterCompetitions(value?.id));
      history.push({
        pathname: routesPath.leagueCalendar,
        state: { id: `${value?.id}` },
      });
    },
    [dispatch],
  );

  return (
    <>
      {location.state?.id ? (
        <>
          {loading && 'loading'}
          {!loading && !error && <ListCalendar matches={matches} />}
          {error && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h1" component="h2" color="white" align="center">
                нет данных
              </Typography>
              <Button onClick={history.goBack} variant="contained">
                Вернуться назад
              </Button>
            </Box>
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

export default LeagueCalendar;
