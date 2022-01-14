import {
  Box,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { sideBarWidth } from '../../../constants/layout';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const SideBarHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const sideBarConfig = [
  { text: 'Список лиг/соревнований', path: '/' },
  { text: 'Список команд', path: '/listOfCommands' },
  { text: 'Календарь лиги', path: '/leagueCalendar' },
  { text: 'Календарь команды', path: '/teamCalendar' },
];

export const SideBar = ({ open, onClick }) => {
  const theme = useTheme();
  const matchesUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const { pathname } = useLocation();

  const activeLinkStyle = {
    color: 'primary.main',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  return (
    <Drawer
      sx={{
        width: sideBarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sideBarWidth,
          boxSizing: 'border-box',
        },
      }}
      variant={matchesUpSm ? 'persistent' : 'temporary'}
      anchor="left"
      open={open}
    >
      <SideBarHeader>
        <IconButton onClick={onClick}>
          <ChevronLeftIcon />
        </IconButton>
      </SideBarHeader>
      <Divider />
      <Box onClick={onClick} onKeyDown={onClick}>
        <List>
          {sideBarConfig.map(({ text, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={text}
              sx={{
                ...(pathname === path && activeLinkStyle),
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
