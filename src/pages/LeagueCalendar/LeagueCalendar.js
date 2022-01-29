import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ListCalendar } from '../../components/ListCalendar';
import { fetchMatchesLeagueAsync } from '../../store/reducers/matchesLeagueReducer';
import Typography from '@mui/material/Typography';
import { Card, TextField } from '@mui/material';

const LeagueCalendar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { matches } = useSelector(({ matchesLeague }) => matchesLeague);
  const { dateFrom, dateTo } = useSelector(({ filters }) => filters);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (location.state?.id) {
      dispatch(
        fetchMatchesLeagueAsync(location.state.id, [
          { name: 'dateFrom', value: dateFrom },
          { name: 'dateTo', value: dateTo },
        ]),
      );
    }
  }, [dateFrom, dateTo]);

  return (
    <>
      {location.state?.id ? (
        <ListCalendar matches={matches} />
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
          <TextField
            id="search"
            label="Поиск соревнования"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Typography variant="h5" color="initial">
            Соревнование не выбрано
          </Typography>
        </Card>
      )}
    </>
  );
};

export default LeagueCalendar;
