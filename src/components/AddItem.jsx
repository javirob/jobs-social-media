import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey, lightBlue } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AddItem = ({ id, img, name, title, text }) => {
  return (
    <Box key={id}>
      <Box sx={{ display: 'flex', marginY: '10px', alignItems: 'center' }}>
        <img src={img} width='35px' height='35px' alt={name} sx={{ display: 'inlineBlock' }} />
        <Box sx={{ paddingLeft: '8px' }}>
          <Typography
            component='p'
            sx={{ lineHeight: '14px', fontSize: '9px', fontWeight: '500', color: grey[900], cursor: 'pointer', '&:hover': { color: lightBlue[500], textDecoration: 'underline' } }}>
            {title}
          </Typography>
          <Typography component='p' sx={{ lineHeight: '14px', fontSize: '9px', fontWeight: '400', color: grey[700] }}>
            {text}
          </Typography>
        </Box>
        <ChevronRightIcon />
      </Box>
      <Divider />
    </Box>
  );
};

export default AddItem;
