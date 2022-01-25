import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ListCalendar } from '../../components/ListCalendar';
import { fetchMatchesTeamAsync } from '../../store/reducers/matchesTeamReducer';

const TeamCalendar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { matches } = useSelector(({ matchesTeam }) => matchesTeam);

  useEffect(() => {
    if (location.state) {
      dispatch(fetchMatchesTeamAsync(location.state.id));
    }
  }, []);

  return <ListCalendar matches={matches} />;
};

export default TeamCalendar;
