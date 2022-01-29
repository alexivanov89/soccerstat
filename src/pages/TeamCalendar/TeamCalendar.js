import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { ListCalendar } from '../../components/ListCalendar';
import { MyAutocomplete } from '../../components/MyAutocomplete';
import { fetchMatchesTeamAsync } from '../../store/reducers/matchesTeamReducer';
import { SetFilterTeamsLeague } from '../../store/actions/creator/teamsLeague';
import {
  fetchTeamsLeagueAsync,
  getTeamsLeagueSelector,
} from '../../store/reducers/teamsLeagueReducer';
import { routesPath } from '../../router/routes';
import { ClearMatchesTeam } from '../../store/actions/creator/matchesTeam';

const TeamCalendar = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { matches, loading, error } = useSelector(({ matchesTeam }) => matchesTeam);
  const { dateFrom, dateTo } = useSelector(({ filters }) => filters);
  const teamsLeagueSelected = useSelector(getTeamsLeagueSelector);

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
      dispatch(
        fetchMatchesTeamAsync(location.state.id, [
          { name: 'dateFrom', value: dateFrom },
          { name: 'dateTo', value: dateTo },
        ]),
      );
    }
    return () => {
      dispatch(SetFilterTeamsLeague(null));
      dispatch(ClearMatchesTeam());
    };
  }, [dateFrom, dateTo, location.state?.id]);

  useEffect(() => {
    dispatch(fetchTeamsLeagueAsync(2021));
    return () => {
      dispatch(ClearMatchesTeam());
    };
  }, []);

  const handleChange = useCallback(
    (value) => {
      dispatch(SetFilterTeamsLeague(value?.id));
      history.push({
        pathname: routesPath.teamCalendar,
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
            getOptionLabel={(option) => `${option.name}, ${option.area.name}`}
            options={prepareTeamsLeague}
            onChange={handleChange}
            label={'Найти команду'}
          />
          <Typography variant="h5" color="initial">
            Выберите команду
          </Typography>
        </Card>
      )}
    </>
  );
};

export default TeamCalendar;
