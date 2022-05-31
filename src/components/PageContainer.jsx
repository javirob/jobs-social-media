import React from 'react';
import Box from '@mui/material/Box';

const PageContainer = ({ children }) => {
  return (
    <Box bgcolor='rgb(236, 239, 241)' sx={{ paddingY: '20px' }}>
      <Box sx={{ height: '100%', minHeight: '100vh', margin: '0 auto', width: { xs: '95vw', sm: '95vw' }, maxWidth: '1100px', paddingX: { xs: '0', sm: '1rem', md: '2rem' } }}>{children}</Box>
    </Box>
  );
};

export default PageContainer;
