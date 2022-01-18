import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchMatchesLeagueAsync } from '../../store/reducers/matchesLeagueReducer';

const LeagueCalendar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(location);
  useEffect(() => {
    if (location?.state) {
      dispatch(fetchMatchesLeagueAsync(location?.state?.id));
    }
  }, []);

  return <div>LeagueCalendar {`${location?.state?.id}`}</div>;
};

export default LeagueCalendar;
