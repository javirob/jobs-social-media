import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Left from './Left/Left';
import Center from './Center/Center';
import Right from './Right/Right';
import PageContainer from '../../components/PageContainer';

const Messages = () => {
  const [isFocus, setFocus] = React.useState(false);

  return (
    <PageContainer>
      <Stack direction='row' sx={{ gap: { xs: '0', sm: '10px', md: '20px' } }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Left setFocus={setFocus} />
        </Box>
        <Box sx={{ flex: '1' }}>
          <Center isFocus={isFocus} setFocus={setFocus} />
        </Box>
        <Box sx={{ width: '25%', display: { xs: 'none', md: 'block' } }}>
          <Right />
        </Box>
      </Stack>
    </PageContainer>
  );
};

export default Messages;
