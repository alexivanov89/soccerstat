import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { footballService } from '../../services/footballService';
import { fetchCompetitionsAsync } from '../../store/reducers/competitionsReducer';

const ListOfLeaguesCompetitions = () => {
  const dispatch = useDispatch();
  const { competitions } = useSelector(({ competitions }) => competitions);
  // console.log(competitions);
  // footballService.getMatches().then((result) => console.log(result.data));

  useEffect(() => {
    dispatch(fetchCompetitionsAsync());
  }, [dispatch]);

  return <div>ListOfLeaguesCompetitions</div>;
};

export default ListOfLeaguesCompetitions;
