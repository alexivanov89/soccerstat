import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    overflow: 'hidden',
  },
}));

const ListCalendar = ({ matches }) => {
  const classes = useStyles();

  return (
    <Paper>
      <Grid container rowSpacing={1} sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
        {matches?.matches?.length !== 0 &&
          matches?.matches?.map(({ competition, utcDate, matchday, score, homeTeam, awayTeam }) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={`${utcDate}-${homeTeam.name}-${awayTeam.name}`}
            >
              <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                {matches?.competition
                  ? `${matches.competition.name}, ${matchday} тур`
                  : `${competition?.name}, ${matchday} тур`}
              </Typography>
              <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                {utcDate}
              </Typography>
              <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                {`${homeTeam.name} ${
                  score.fullTime.homeTeam === null ? '' : score.fullTime.homeTeam
                } - ${score.fullTime.awayTeam === null ? '' : score.fullTime.awayTeam} ${
                  awayTeam.name
                }`}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

export default ListCalendar;
