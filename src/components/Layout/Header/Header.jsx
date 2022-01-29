import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { sideBarWidth } from '../../../constants/layout';
import { CalendarsDateRangePicker } from '../../CalendarsDateRangePicker';
import { routesPath } from '../../../router/routes';
import styled from '@mui/material/styles/styled';

const MyAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${sideBarWidth}px)`,
    marginLeft: `${sideBarWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
  },
}));

const Header = ({ open, onClick }) => {
  const location = useLocation();

  return (
    <>
      <MyAppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={onClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              SoccerStat
            </Typography>
          </div>
          {location.pathname === routesPath.teamCalendar ||
          location.pathname === routesPath.leagueCalendar ? (
            <CalendarsDateRangePicker />
          ) : null}
        </Toolbar>
      </MyAppBar>
    </>
  );
};

export default Header;
