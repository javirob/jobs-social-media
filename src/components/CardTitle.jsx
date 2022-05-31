import React from 'react';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

const CardTitle = ({ title }) => {
  return (
    <Typography component='h1' sx={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', color: grey[900] }}>
      {title}
    </Typography>
  );
};

export default CardTitle;
