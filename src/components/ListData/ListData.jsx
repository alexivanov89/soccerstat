import { NavLink } from 'react-router-dom';
import {
  Autocomplete,
  Box,
  Card,
  CardHeader,
  Grid,
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
    padding: '0px 8px 8px 8px',
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
    padding: '0px 8px 8px 8px',
  },
  table: {
    '& th, td': {
      padding: 4,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      tableLayout: 'fixed',
      '& th, td': {
        fontSize: '0.65rem',
      },
    },
    '& img': {
      maxWidth: '20px',
      maxHeight: '20px',
      marginRight: '2px',
    },
  },
}));

const ListData = ({ list, listOptions, handleChange, maxHeight }) => {
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
        <TableContainer className={classes.tableContainer} sx={{ maxHeight: maxHeight }}>
          <Table stickyHeader aria-label="sticky table" className={classes.table}>
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
                      sx={{ padding: '0px !important' }}
                    >
                      {item.name}
                    </ListItem>
                  </TableCell>
                  <TableCell>
                    <Box key={item.area.ensignUrl} sx={{ display: 'flex', alignItems: 'center' }}>
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
                      <Typography variant="p" color="initial">
                        {item.area.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <ListItem
                      key={item.id}
                      component={NavLink}
                      to={{
                        pathname: listOptions.table.linkPathLastColummns,
                        state: { id: `${item.id}` },
                      }}
                      sx={{ padding: '0px !important' }}
                    >
                      <Typography variant="p" color="initial">
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
