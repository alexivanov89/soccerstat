import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ListCalendar } from '../../components/ListCalendar';
import { fetchMatchesTeamAsync } from '../../store/reducers/matchesTeamReducer';

const TeamCalendar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { matches } = useSelector(({ matchesTeam }) => matchesTeam);
  const { dateFrom, dateTo } = useSelector(({ filters }) => filters);

  useEffect(() => {
    if (location.state) {
      dispatch(
        fetchMatchesTeamAsync(location.state.id, [
          { name: 'dateFrom', value: dateFrom },
          { name: 'dateTo', value: dateTo },
        ]),
      );
    }
  }, [dateFrom, dateTo]);

  return <ListCalendar matches={matches} />;
};

export default TeamCalendar;
