import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchTeamsLeagueAsync } from '../../store/reducers/teamsLeagueReducer';

const ListOfTeams = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(location);
  useEffect(() => {
    if (location?.state) {
      dispatch(fetchTeamsLeagueAsync(location?.state?.id));
    }
  }, []);

  return <div>ListTeams </div>;
};

export default ListOfTeams;
