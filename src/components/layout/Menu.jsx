import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

const links = [
  { url: '/', icon: <HomeIcon />, text: 'Home', notifications: 0 },
  { url: '/network', icon: <PeopleIcon />, text: 'Network', notifications: 10 },
  { url: '/jobs', icon: <WorkIcon />, text: 'Jobs', notifications: 0 },
  { url: '/messages', icon: <MessageIcon />, text: 'Messages', notifications: 4 },
  { url: '/notifications', icon: <NotificationsIcon />, text: 'Notifications', notifications: 6 },
];

const CustomBadge = styled(Badge)({
  '& span': {
    fontSize: '10px',
    height: '15px',
    minWidth: '15px',
    right: '4px',
    top: '2px',
    padding: '0',
  },
});

const Menu = () => {
  return (
    <Box sx={{ display: 'flex', gap: { xs: '5px', md: '30px' }, alignItems: 'center', justifyContent: 'center' }}>
      {links.map((link, i) => {
        const { url, text, icon, notifications } = link;
        return (
          <Link key={i} to={url} style={{ textAlign: 'center', textDecoration: 'none', color: '#333' }}>
            <IconButton sx={{ display: 'flex', flexDirection: 'column', width: { xs: 'auto', sm: '55px' } }}>
              <CustomBadge badgeContent={notifications} color='error'>
                {icon}
              </CustomBadge>
              <Typography textAlign='center' sx={{ fontSize: '10px', display: { xs: 'none', sm: 'block' } }}>
                {text}
              </Typography>
            </IconButton>
          </Link>
        );
      })}
    </Box>
  );
};

export default Menu;
