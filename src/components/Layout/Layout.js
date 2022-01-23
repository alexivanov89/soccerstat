import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sideBarWidth } from '../../constants/layout';
import { Header } from './Header';
import { SideBar, SideBarHeader } from './SideBar/SideBar';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    maxHeight: '100vh',
    minHeight: '100vh',
    overflow: 'hidden',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${sideBarWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  }),
);

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box display="flex">
      <CssBaseline />
      <Header open={open} onClick={handleToggle} />
      <SideBar open={open} onClick={handleToggle} />
      <Main open={open}>
        <SideBarHeader />
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
