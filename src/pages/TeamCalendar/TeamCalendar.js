import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { ListCalendar } from '../../components/ListCalendar';
import { MyAutocomplete } from '../../components/MyAutocomplete';
import { fetchMatchesTeamAsync } from '../../store/reducers/matchesTeamReducer';
import {
  fetchTeamsLeagueAsync,
  getTeamsLeagueSelector,
} from '../../store/reducers/teamsLeagueReducer';
import { SetFilterTeamsLeague } from '../../store/actions/creator/teamsLeague';
import { ClearMatchesTeam } from '../../store/actions/creator/matchesTeam';
import { routesPath } from '../../router/routes';

const TeamCalendar = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const teamsLeagueSelected = useSelector(getTeamsLeagueSelector);
  const { dateFrom, dateTo } = useSelector(({ filters }) => filters);
  const { matches, loading, error } = useSelector(({ matchesTeam }) => matchesTeam);

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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h1" component="h2" color="white" align="center">
                ?????? ????????????
              </Typography>
              <Button onClick={history.goBack} variant="contained">
                ?????????????????? ??????????
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
            getOptionLabel={(option) => `${option.name}, ${option.area.name}`}
            options={prepareTeamsLeague}
            onChange={handleChange}
            label={'?????????? ??????????????'}
          />
          <Typography variant="h5" color="initial">
            ???????????????? ??????????????
          </Typography>
        </Card>
      )}
    </>
  );
};

export default TeamCalendar;
