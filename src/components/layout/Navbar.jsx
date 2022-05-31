import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material';
import logo from '../../img/logo.png';
import logoMobile from '../../img/mobile-logo.png';
import { Link } from 'react-router-dom';
import SearchContainer from './Search';
import Menu from './Menu';
import ProfileMenu from './ProfileMenu';

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  minHeight: 'unset !important',
  padding: '10px',
});

const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'white' }}>
      <Box sx={{ width: '95vw', maxWidth: '1100px', marginX: 'auto', paddingX: { xs: '10px', sm: '15px' } }}>
        <CustomToolbar>
          {/* Logo and Search */}
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Link to='/'>
              <Box sx={{ display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}>
                <img src={logo} alt='E-work logo' width='100px' />
              </Box>
              <Box sx={{ marginRight: '5px', display: { xs: 'block', sm: 'none' } }}>
                <img src={logoMobile} alt='E-work logo' width='40px' />
              </Box>
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <SearchContainer />
            </Box>
          </Box>

          {/* Main Links */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <SearchMobile /> */}
            <Menu />
            <ProfileMenu />
          </Box>
        </CustomToolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
