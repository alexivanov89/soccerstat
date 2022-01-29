import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { sideBarWidth } from '../../../constants/layout';
import { publicRoutes } from '../../../router/routes';

export const SideBarHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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
          {publicRoutes.map(({ label, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={label}
              sx={{
                ...(pathname === path && activeLinkStyle),
              }}
            >
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
