import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Left from './Left';
import Center from './Center';
import Right from './Right';
import PageContainer from '../../components/PageContainer';

const Home = () => {
  return (
    <main>
      <PageContainer>
        <Stack direction='row' sx={{ gap: { xs: '0', sm: '15px', md: '20px' } }}>
          <Box sx={{ width: '25%', maxWidth: '200px', display: { xs: 'none', sm: 'block' } }}>
            <Left />
          </Box>
          <Box sx={{ flex: 1, maxWidth: '500px', mx: 'auto' }}>
            <Center />
          </Box>
          <Box sx={{ width: '25%', maxWidth: '200px', display: { xs: 'none', md: 'block' } }}>
            <Right />
          </Box>
        </Stack>
      </PageContainer>
    </main>
  );
};

export default Home;
