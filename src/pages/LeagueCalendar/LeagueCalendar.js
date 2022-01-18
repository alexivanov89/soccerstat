import React from 'react';
import { useParams } from 'react-router-dom';

const LeagueCalendar = () => {
  const { id } = useParams();

  return <div>LeagueCalendar {`${id}`}</div>;
};

export default LeagueCalendar;
