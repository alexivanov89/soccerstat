import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './Header';
import { SideBar, SideBarHeader } from './SideBar/SideBar';
import styled from '@mui/material/styles/styled';
import { sideBarWidth } from '../../constants/layout';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    minHeight: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
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
      '&::-webkit-scrollbar': {
        display: 'none',
      },
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
