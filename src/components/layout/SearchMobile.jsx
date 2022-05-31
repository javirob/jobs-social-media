import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchMobile = () => {
  return (
    <Box sx={{ marginLeft: '10px', display: { xs: 'block', sm: 'none' } }}>
      <IconButton>
        <SearchIcon sx={{ color: '#555', paddingTop: '2px' }} />
      </IconButton>
    </Box>
  );
};

export default SearchMobile;
