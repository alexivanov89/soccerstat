import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchMatchesTeamAsync } from '../../store/reducers/matchesTeamReducer';

const TeamCalendar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(location);
  useEffect(() => {
    if (location?.state) {
      dispatch(fetchMatchesTeamAsync(location?.state?.id));
    }
  }, []);

  return <div>TeamCalendar</div>;
};

export default TeamCalendar;
