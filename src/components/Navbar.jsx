import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import profile from '../img/profile-def.svg';
import { NavLink, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import logo from '../img/logo.svg';

const NavButton = styled('div')({
  '& a': {
    textDecoration: 'none',
  },
  '& a.active .iconButton': {
    color: grey[900],
  },
  '& .iconButton': {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
    fontSize: '8px',
    '&:hover': {
      backgroundColor: 'unset',
      color: grey[900],
    },
  },
});

const pages = [
  {
    name: 'Home',
    url: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Network',
    url: '/network',
    icon: <PeopleIcon />,
  },
  {
    name: 'Jobs',
    url: '/jobs',
    icon: <BusinessCenterIcon />,
  },
  {
    name: 'Messaging',
    url: '/messages',
    icon: <ChatIcon />,
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: <NotificationsActiveIcon />,
  },
];

const Navbar = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', position: 'sticky', marginBottom: '60px', zIndex: '2' }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: grey[50] }}>
        <Box sx={{ paddingX: { xs: '0', sm: '20px' }, width: { xs: '100vw', sm: '95vw' }, margin: 'auto', maxWidth: '1040px' }}>
          <Toolbar sx={{ paddingRight: '0' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5px' }}>
              <NavLink to='/' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={logo} alt='logo' width='30px' height='30px' />
              </NavLink>
            </Box>
            {/* Links */}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: { xs: '2px', sm: '30px' } }}>
              {pages.map((page, index) => {
                const { name, url, icon } = page;

                return (
                  <NavButton key={index}>
                    <NavLink to={url}>
                      <IconButton className='iconButton'>
                        {icon}
                        {name}
                      </IconButton>
                    </NavLink>
                  </NavButton>
                );
              })}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
