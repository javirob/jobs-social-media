import React from 'react';
import JobSearchesBox from './JobSearchesBox';
import RecomendedJobs from './RecomendedJobs';
import Box from '@mui/material/Box';

const Center = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <JobSearchesBox />
      <RecomendedJobs />
    </Box>
  );
};

export default Center;
