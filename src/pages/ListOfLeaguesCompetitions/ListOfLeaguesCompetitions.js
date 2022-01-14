import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompetitionsAsync } from '../../store/reducers/competitionsReducer';

const ListOfLeaguesCompetitions = () => {
  const dispatch = useDispatch();
  const { competitions } = useSelector(({ competitions }) => competitions);
  console.log(competitions);

  useEffect(() => {
    dispatch(fetchCompetitionsAsync());
  }, [dispatch]);

  return <div>ListOfLeaguesCompetitions</div>;
};

export default ListOfLeaguesCompetitions;
