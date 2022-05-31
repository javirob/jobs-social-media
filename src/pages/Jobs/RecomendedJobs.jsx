import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey, lightBlue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { recommendedJobs } from './jobsData';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const JobBox = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '14px',
  paddingLeft: '18px',
  cursor: 'pointer',
  gap: '10px',
  '&:hover .hideIcon': {
    visibility: 'visible',
  },
  '&:hover .recomTitle': {
    textDecoration: 'underline',
  },
});

const HiddenIcon = styled('div')({
  visibility: 'hidden',
});

const RecomendedJobs = () => {
  return (
    <Card sx={{ marginTop: '20px' }}>
      {/* Head */}
      <Box sx={{ padding: '10px', paddingLeft: '18px' }}>
        <Typography component='h2' sx={{ fontSize: '16px', fontWeight: '500', color: grey[900] }}>
          Recommended for you
        </Typography>
        <Typography component='p' sx={{ fontSize: '14px', fontWeight: '400', color: grey[600] }}>
          Based on your profile and search history
        </Typography>
      </Box>
      {/* Body */}
      {recommendedJobs.map((item) => {
        const { id, title, company, location, posted, img } = item;
        return (
          <Box key={id}>
            <JobBox>
              <Box sx={{ marginRight: '10px' }}>
                <img src={img} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt={company} />
              </Box>
              <Box sx={{ flex: '1' }}>
                <Typography className='recomTitle' sx={{ color: lightBlue[800], fontSize: '14px', fontWeight: '500', textTransform: 'capitalize' }}>
                  {title}
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: '300', color: grey[600] }}>{company}</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: '300', color: grey[600] }}>{location}</Typography>
                <Box sx={{ display: 'flex', gap: '2px' }}>
                  <Typography sx={{ fontSize: '13px', fontWeight: '300', color: grey[600] }}>Posted: </Typography>
                  <Typography sx={{ fontSize: '13px', fontWeight: '300', color: 'green' }}>{posted}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: '10px', color: grey[600] }}>
                <HiddenIcon className='hideIcon'>
                  <VisibilityOffIcon />
                </HiddenIcon>
                <BookmarkIcon />
              </Box>
            </JobBox>
            <Divider />
          </Box>
        );
      })}
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '8px' }}>
        <IconButton sx={{ borderRadius: '5px', color: lightBlue[800], padding: '4px 6px', backgroundColor: lightBlue[50] }}>
          <Typography sx={{ fontSize: '13px', fontWeight: '500', color: lightBlue[800] }}>Show all</Typography>
        </IconButton>
      </Box>
    </Card>
  );
};

export default RecomendedJobs;
