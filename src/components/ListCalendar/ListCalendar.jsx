import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ListCalendar = ({ matches }) => {
  const matchdays = Array.from(new Set(matches?.matches.map(({ matchday }) => matchday)));

  const prepareMatches = matchdays.map((matchdayItem) => ({
    matchday: matchdayItem,
    matches: matches?.matches.filter(({ matchday }) => matchday === matchdayItem),
  }));

  return (
    <Paper>
      <Grid container rowSpacing={1} sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
            {matches?.competition ? `Календарь ${matches.competition.name}` : ``}
          </Typography>
        </Box>
        <Grid
          container
          rowSpacing={1}
          sx={{ p: 1, display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          {matches?.matches?.length !== 0 &&
            prepareMatches?.map(({ matchday, matches }) => (
              <Grid
                container
                item
                key={matchday}
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderBottom: `1px solid ${theme.palette.primary.main}`,
                })}
              >
                <Box>
                  <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                    {`${matchday} Тур`}
                  </Typography>
                </Box>
                {matches?.map(({ competition, utcDate, matchday, score, homeTeam, awayTeam }) => (
                  <Grid container item key={`${utcDate}-${homeTeam.name}-${awayTeam.name}`}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        sx={[
                          { mb: 1.5, textAlign: 'center' },
                          (theme) => ({
                            [theme.breakpoints.down('md')]: {
                              textAlign: 'start',
                            },
                          }),
                        ]}
                        color="text.secondary"
                      >
                        {format(new Date(utcDate), 'MM/dd/yyyy k:m')}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography
                        sx={{ mb: 1.5, textAlign: 'start', display: 'inline-block' }}
                        color="text.secondary"
                      >
                        {`${homeTeam.name}`}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5, mx: 1, textAlign: 'start', display: 'inline-block' }}
                        color="text.secondary"
                      >
                        {`${score.fullTime.homeTeam === null ? '' : score.fullTime.homeTeam} - ${
                          score.fullTime.awayTeam === null ? '' : score.fullTime.awayTeam
                        }`}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5, textAlign: 'start', display: 'inline-block' }}
                        color="text.secondary"
                      >
                        {`${awayTeam.name}`}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ListCalendar;
