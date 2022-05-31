import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Center from './Center';
import Right from './Right';
import PageContainer from '../../components/PageContainer';

const Network = () => {
  return (
    <PageContainer>
      <Stack direction='row' sx={{ gap: { xs: '0', sm: '10px', md: '20px' } }}>
        <Box sx={{ flex: '1', maxWidth: '550px', mx: 'auto' }}>
          <Center />
        </Box>
        <Box sx={{ width: '25%', display: { xs: 'none', md: 'block' } }}>
          <Right />
        </Box>
      </Stack>
    </PageContainer>
  );
};

export default Network;
