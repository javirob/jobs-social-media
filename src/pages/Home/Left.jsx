import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { grey, blue } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';
import profileImg from '../../img/profile.jpg';
import codingImg from '../../img/coding.jpg';

const Left = () => {
  return (
    <Box>
      <Card>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <CardMedia component='img' height='50' image={codingImg} alt='profile background image coding' />
          <img src={profileImg} width='50px' height='50px' style={{ borderRadius: '50%', objectFit: 'cover', position: 'absolute', bottom: '-25px' }} alt='profile' />
        </Box>
        <Box sx={{ paddingTop: '40px' }}>
          <Typography textAlign='center' sx={{ fontSize: '16px', fontWeight: '600', color: grey[700], marginBottom: '8px', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
            Welcome, Sarah!
          </Typography>
          <Typography textAlign='center' sx={{ fontSize: '13px', color: blue[800], marginBottom: '15px', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
            Change photo
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ paddingY: '10px' }}>
          <Box sx={{ '&:hover': { backgroundColor: grey[200] }, py: '4px', cursor: 'pointer' }}>
            <Stack direction='row' justifyContent='space-between' spacing={2}>
              <Typography sx={{ fontSize: '13px', color: grey[700], fontWeight: '500', px: '10px' }}>Connections</Typography>
              <Typography sx={{ fontSize: '13px', color: blue[800], fontWeight: '500', px: '10px' }}>93</Typography>
            </Stack>
            <Typography variant='p' component='p' sx={{ fontSize: '13px', color: grey[900], fontWeight: '500', padding: '4px 10px' }}>
              Grow your network
            </Typography>
          </Box>

          <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: grey[200] } }}>
            <Typography variant='span' sx={{ fontSize: '13px', color: grey[700], fontWeight: '500', p: '4px 10px' }}>
              Who's viewed your profile
            </Typography>
            <Typography variant='span' sx={{ fontSize: '13px', color: blue[800], fontWeight: '500', px: '10px' }}>
              19
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ padding: '10px', cursor: 'pointer', '&:hover': { backgroundColor: grey[200] } }}>
          <Typography variant='span' sx={{ fontSize: '13px', color: grey[700], fontWeight: '400' }}>
            Access exclusive tools & insights
          </Typography>
          <Stack direction='row' spacing={1} alignItems='center'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' className='mercado-match' width='24' height='24' focusable='false'>
              <path d='M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z' fill='#f8c77e'></path>
              <path d='M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z' fill='#e7a33e'></path>
            </svg>
            <Typography variant='p' component='p' sx={{ fontSize: '13px', color: grey[900], marginBottom: '10px', fontWeight: '500' }}>
              Reactivate Premium: 50% Off
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ padding: '10px', cursor: 'pointer', '&:hover': { backgroundColor: grey[200] } }}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <BookmarkIcon />
            <Typography variant='p' component='p' sx={{ fontSize: '13px', color: grey[900], marginBottom: '10px', fontWeight: '500' }}>
              My items
            </Typography>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};

export default Left;
