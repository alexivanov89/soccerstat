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
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { fetchCompetitionsAsync } from '../../store/reducers/competitionsReducer';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    maxHeight: 375,
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

const ListLeague = () => {
  const dispatch = useDispatch();
  const { competitions } = useSelector(({ competitions }) => competitions);
  const [options, setOptions] = useState([]);
  const [prepareComp, setprepareComp] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

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
    setprepareComp(
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
  }, [competitions, dispatch]);

  useEffect(() => {
    dispatch(fetchCompetitionsAsync());
  }, []);

  const handleChange = (value) => {
    const searchParams = new URLSearchParams(location?.search);
    const idParam = searchParams.get('id');
    console.log(idParam);
    console.log(prepareComp.id);
    setprepareComp([...prepareComp.filter(({ id }) => +id === value?.id)]);
    history.push(`${location.pathname}?id=${value?.id}`);
  };

  return (
    <Card sx={{ borderRadius: 4 }}>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <CardHeader title="Список лиг" subheader="Чемпионаты ведущих стран Европы" />
        </Grid>
        {/* <Grid item xs={12}>
          {!!options && options?.length !== 0 && (
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              getOptionLabel={(option) => `${option.name}, ${option.area.countryCode}`}
              options={options}
              sx={{ width: 300 }}
              onChange={(e, value) => {
                handleChange(value);
              }}
              renderInput={(params) => <TextField {...params} label="Найти Чемпионат" />}
            />
          )}
        </Grid> */}
      </Grid>

      {/* <Box sx={{ p: 3 }}>
        <List sx={{ p: 1, maxHeight: '40vh', overflowY: 'auto' }}>
          {!competitions?.loading &&
            competitions?.competitions.map(({ id, name, area }) => (
              <ListItem key={id} component={NavLink} to={`/leagueCalendar/${id}`}>
                <ListItemText primary={`${name}, ${area.countryCode}`} />
              </ListItem>
            ))}
        </List>
      </Box> */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer className={classes.tableContainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Название лиги</TableCell>
                <TableCell>Страна</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {options?.map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <ListItem key={item.id} component={NavLink} to={`/leagueCalendar/${item.id}`}>
                      {item.name}
                    </ListItem>
                  </TableCell>
                  <TableCell>
                    {item.area.name}
                    <ImageList sx={{ width: 30, height: 30 }} cols={1}>
                      <ImageListItem key={item.area.ensignUrl}>
                        <img src={item.area.ensignUrl} loading="lazy" />
                      </ImageListItem>
                    </ImageList>
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
