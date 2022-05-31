import React from 'react';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

const CardText = ({ text }) => {
  return (
    <Typography component='p' sx={{ textAlign: 'center', fontSize: '14px', fontWeight: '400', color: grey[700] }}>
      {text}
    </Typography>
  );
};

export default CardText;
