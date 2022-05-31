import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { grey, blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import MiniText from '../../../components/MiniText';

const SingleMessage = ({ id, author, time, avatar, selected }) => {
  return (
    <Box
      key={id}
      sx={{
        borderLeft: selected ? '3px solid green' : '3px solid transparent',
        backgroundColor: selected && blue[50],
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: grey[100],
        },
      }}>
      <Box
        sx={{
          padding: '10px',

          display: 'flex',
          gap: '5px',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <img src={avatar} alt='avatar' width='30px' height='30px' style={{ borderRadius: '50%' }} />

        <Box sx={{ flex: '1', padding: '0 10px' }}>
          <Typography component='h2' sx={{ fontSize: '12px', color: grey[800], fontWeight: '500' }}>
            {author}
          </Typography>
          <Typography component='p' sx={{ fontSize: '10px', color: grey[600], fontWeight: '500' }}>
            Hello john
          </Typography>
        </Box>
        <MiniText text={time} />
      </Box>
      <Divider />
    </Box>
  );
};

export default SingleMessage;
