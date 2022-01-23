import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { routesPath } from '../../router/routes';
import { fetchCompetitionsAsync } from '../../store/reducers/competitionsReducer';
import {
  Autocomplete,
  Box,
  Card,
  CardHeader,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    maxHeight: '73vh',
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
  paper: {
    width: '100%',
    overflow: 'hidden',
    maxHeight: 'calc(80vh - 144px)',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'calc(80vh - 224px)',
    },
  },
}));

const ListLeague = () => {
  const dispatch = useDispatch();
  const { competitions } = useSelector(({ competitions }) => competitions);
  const [options, setOptions] = useState([]);
  const [prepareComp, setPrepareComp] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  console.log(location);

  useEffect(() => {
    dispatch(fetchCompetitionsAsync());
  }, []);

  useEffect(() => {
    setOptions(
      competitions?.competitions.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }),
    );
    console.log(options);
  }, [competitions, dispatch]);

  useEffect(() => {
    if (Boolean(options) && options.length !== 0) {
      setPrepareComp([...options]);
      console.log(prepareComp);
    }
  }, [options]);

  useEffect(() => {
    if (location?.state?.id) {
      setPrepareComp([...options.filter(({ id }) => id === +location?.state?.id)]);
    }
    console.log(prepareComp);
  }, [location?.state?.id]);

  const handleChange = (value) => {
    history.push({
      pathname: routesPath.home,
      state: { id: value?.id },
    });
    // console.log(location?.state?.id);
    // setPrepareComp([...options.filter(({ id }) => id === +location?.state?.id)]);
    // console.log(prepareComp);
  };

  return (
    <Card sx={{ borderRadius: 4 }}>
      <Grid container rowSpacing={1} sx={{ p: 1 }}>
        <Grid item xs={12} sm={6}>
          <CardHeader
            title="Список лиг"
            subheader="Чемпионаты ведущих стран Европы"
            sx={{ p: 0 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {!!options && options?.length !== 0 && (
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              getOptionLabel={(option) => `${option.name}, ${option.area.countryCode}`}
              options={options}
              sx={{ width: '100%', padding: '0px 5px' }}
              onChange={(e, value) => {
                handleChange(value);
              }}
              renderInput={(params) => <TextField {...params} label="Найти Чемпионат" />}
            />
          )}
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <TableContainer className={classes.tableContainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Название лиги</TableCell>
                <TableCell>Страна</TableCell>
                <TableCell>Календарь лиги</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {options?.map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <ListItem
                      key={item.id}
                      component={NavLink}
                      to={{ pathname: routesPath.listOfTeams, state: { id: `${item.id}` } }}
                    >
                      {item.name}
                    </ListItem>
                  </TableCell>
                  <TableCell>
                    {item.area.name}
                    <ImageList sx={{ width: 30, height: 30 }} cols={1}>
                      <ImageListItem key={item.area.ensignUrl}>
                        {Boolean(item.area.ensignUrl) ? (
                          <img src={item.area.ensignUrl} alt="img_flag" loading="lazy" />
                        ) : null}
                      </ImageListItem>
                    </ImageList>
                  </TableCell>
                  <TableCell>
                    <ListItem
                      key={item.id}
                      component={NavLink}
                      to={{ pathname: routesPath.leagueCalendar, state: { id: `${item.id}` } }}
                      sx={{ pl: 0 }}
                    >
                      <Typography variant="subtitle1" color="initial">
                        Календарь {item.name}
                      </Typography>
                    </ListItem>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Card>
  );
};

export default ListLeague;
