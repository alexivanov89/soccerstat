import { NavLink } from 'react-router-dom';
import {
  Autocomplete,
  Card,
  CardHeader,
  Grid,
  ImageList,
  ImageListItem,
  ListItem,
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
    maxHeight: '60vh',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '55vh',
    },
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
  },
}));

const ListData = ({ list, listOptions, handleChange }) => {
  const classes = useStyles();

  return (
    <Card sx={{ borderRadius: 4 }}>
      <Grid container rowSpacing={1} sx={{ p: 1 }}>
        <Grid item xs={12} sm={6}>
          <CardHeader title={listOptions.title} subheader={listOptions.subheader} sx={{ p: 0 }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {list.length !== 0 && (
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              getOptionLabel={listOptions.autocompleteOptions.getOptionLabel}
              options={list}
              sx={{ width: '100%', padding: '0px 5px' }}
              onChange={(e, value) => {
                handleChange(value);
              }}
              renderInput={(params) => (
                <TextField {...params} label={listOptions.autocompleteOptions.label} />
              )}
            />
          )}
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <TableContainer className={classes.tableContainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {listOptions.table.tableColumns.map((item) => (
                  <TableCell key={item}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <ListItem
                      key={item.id}
                      component={listOptions.table.linkPathFirstColummns ? NavLink : null}
                      to={{
                        pathname: listOptions.table.linkPathFirstColummns,
                        state: { id: `${item.id}` },
                      }}
                    >
                      {item.name}
                    </ListItem>
                  </TableCell>
                  <TableCell>
                    {item.area.name}
                    <ImageList sx={{ width: 30, height: 30 }} cols={1}>
                      <ImageListItem key={item.area.ensignUrl}>
                        {
                          (listOptions.table.imgOption =
                            'ensignUrl' &&
                            (Boolean(item.area.ensignUrl) ? (
                              <img src={item.area.ensignUrl} alt="img" loading="lazy" />
                            ) : null))
                        }
                        {
                          (listOptions.table.imgOption =
                            'crestUrl' && Boolean(item.crestUrl) ? (
                              <img src={item.crestUrl} alt="img" loading="lazy" />
                            ) : null)
                        }
                      </ImageListItem>
                    </ImageList>
                  </TableCell>
                  <TableCell>
                    <ListItem
                      key={item.id}
                      component={NavLink}
                      to={{
                        pathname: listOptions.table.linkPathLastColummns,
                        state: { id: `${item.id}` },
                      }}
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

export default ListData;
