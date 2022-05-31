import React from 'react';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

const CardText2 = ({ text }) => {
  return (
    <Typography component='p' sx={{ lineHeight: '16px', fontSize: '12px', fontWeight: '400', color: grey[900] }}>
      {text}
    </Typography>
  );
};

export default CardText2;
