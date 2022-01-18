import { useEffect } from 'react';
import { Box, Card, CardHeader, Grid, List, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayMatchesAsync } from '../../store/reducers/todayMatchesReducer';
import s from './index.module.scss';

const ListMatches = () => {
  const todayMatches = useSelector(({ todayMatches }) => todayMatches);
  const { matches, loading } = todayMatches;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodayMatchesAsync());
  }, []);

  return (
    <Card sx={{ borderRadius: 4, mb: 2 }}>
      <CardHeader sx={{ p: 1, pb: 0 }} title="Список сегодняшних матчей" />
      <Box sx={{ p: 1 }}>
        <List className={s.list}>
          <Grid container rowSpacing={1}>
            {!loading && matches?.matches?.length !== 0 ? (
              matches?.matches?.map((match) => (
                <Grid item xs={12} sm={6} lg={4} key={match.id}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', fontSize: '0.75rem' }}>
                    <Typography variant="span" color="initial">
                      {match.competition.name}
                    </Typography>
                    <Typography variant="span" color="initial" sx={{ px: 1 }}>
                      {`${match.matchday} Тур`}
                    </Typography>
                    <Typography variant="span" color="initial" sx={{ minWidth: 300 }}>
                      {`${match.homeTeam.name} - ${match.awayTeam.name}`}
                    </Typography>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="span" color="initial">
                Сегодня матчей нет
              </Typography>
            )}
          </Grid>
        </List>
      </Box>
    </Card>
  );
};

export default ListMatches;
