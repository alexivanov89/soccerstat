import { Box, Card, CardHeader, CircularProgress, Grid, List, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 5,
    maxHeight: 60,
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: 16,
      backgroundColor: '#F5F7FA',
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 4,
      boxShadow: 'inset 0 0 16px 16px rgba(13, 26, 51, 0.05)',
      border: 'solid 6px transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      boxShadow: 'inset 0 0 16px 16px rgba(13, 26, 51, 0.2)',
      border: 'solid 6px transparent',
    },
  },
}));

const ListMatches = ({ todayMatches }) => {
  const { matches, loading } = todayMatches;
  const classes = useStyles();

  return (
    <Card sx={{ borderRadius: 4, mb: 2, maxHeight: '20vh' }}>
      <CardHeader sx={{ p: 1, pb: 0 }} title="Список сегодняшних матчей" />
      <Box sx={{ p: 1 }}>
        <List className={classes.list}>
          <Grid container rowSpacing={1} sx={{ overflow: 'auto', alignItems: 'center' }}>
            {loading && <CircularProgress color="primary" />}
            {!loading &&
              matches?.matches?.length !== 0 &&
              matches?.matches?.map((match) => (
                <Grid item xs={12} sm={6} lg={4} key={match.id} sx={{ overflow: 'hidden' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', fontSize: '0.75rem' }}>
                    <Typography variant="span" color="initial">
                      {match.competition.name}
                    </Typography>
                    <Typography variant="span" color="initial" sx={{ px: 1 }}>
                      {`${match.matchday} Тур: `}
                    </Typography>
                    <Typography variant="span" color="initial" sx={{ minWidth: 300 }}>
                      {`${match.homeTeam.name} - ${match.awayTeam.name}`}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            {!loading && matches?.matches?.length === 0 && (
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
