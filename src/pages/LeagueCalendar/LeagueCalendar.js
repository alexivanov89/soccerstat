import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ListCalendar } from '../../components/ListCalendar';
import { fetchMatchesLeagueAsync } from '../../store/reducers/matchesLeagueReducer';

const LeagueCalendar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { matches } = useSelector(({ matchesLeague }) => matchesLeague);
  const { dateFrom, dateTo } = useSelector(({ filters }) => filters);

  useEffect(() => {
    if (location.state) {
      dispatch(
        fetchMatchesLeagueAsync(location.state.id, [
          { name: 'dateFrom', value: dateFrom },
          { name: 'dateTo', value: dateTo },
        ]),
      );
    }
  }, [dateFrom, dateTo]);

  return <ListCalendar matches={matches} />;
};

export default LeagueCalendar;
