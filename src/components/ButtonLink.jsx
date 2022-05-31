import React from 'react';
import Button from '@mui/material/Button';
import { lightBlue } from '@mui/material/colors';
import { Box } from '@mui/material';

const ButtonLink = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button sx={{ fontSize: '14px', textTransform: 'unset', color: lightBlue[800], fontWeight: '400' }}>{children}</Button>
    </Box>
  );
};

export default ButtonLink;
