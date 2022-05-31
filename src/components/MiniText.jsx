import React from 'react';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

const MiniText = ({ text }) => {
  return (
    <Typography component='span' sx={{ lineHeight: '14px', fontSize: '9px', fontWeight: '400', color: grey[700] }}>
      {text}
    </Typography>
  );
};

export default MiniText;
