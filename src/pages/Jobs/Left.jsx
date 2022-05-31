import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';

const options = [
  {
    id: 1,
    text: 'My jobs',
    icon: <BookmarkIcon sx={{ color: grey[700] }} />,
  },
  {
    id: 2,
    text: 'Job Alerts',
    icon: <NotificationsIcon sx={{ color: grey[700] }} />,
  },
  {
    id: 3,
    text: 'Salary',
    icon: <RequestPageIcon sx={{ color: grey[700] }} />,
  },
  {
    id: 4,
    text: 'Skills',
    icon: <AssignmentTurnedInIcon sx={{ color: grey[700] }} />,
  },
  {
    id: 5,
    text: 'Current CVs',
    icon: <ContactPageIcon sx={{ color: grey[700] }} />,
  },
  {
    id: 6,
    text: 'Resume Builder',
    icon: <ArticleIcon sx={{ color: grey[700] }} />,
  },
  {
    id: 7,
    text: 'Job Seeker tips',
    icon: <PlayArrowIcon sx={{ color: grey[700] }} />,
  },
  {
    id: 8,
    text: 'Application settings',
    icon: <SettingsIcon sx={{ color: grey[700] }} />,
  },
];

const Left = () => {
  return (
    <>
      <Card variant='outlined'>
        <Stack spacing={1}>
          {options.map((item) => {
            const { id, text, icon } = item;

            return (
              <Box key={id} sx={{ cursor: 'pointer', padding: '10px', display: 'flex', gap: '8px', alignItems: 'center', '&:hover': { backgroundColor: grey[300] } }}>
                {icon}
                <Typography sx={{ color: grey[700], fontSize: '14px', fontWeight: '500' }}>{text}</Typography>
              </Box>
            );
          })}
        </Stack>
      </Card>
      <Box sx={{ paddingX: '2px' }}>
        <Button
          variant='outlined'
          sx={{ paddingY: '7px', width: '100%', borderRadius: '20px', marginTop: '15px', marginX: 'auto', textTransform: 'unset', fontSize: '15px' }}
          startIcon={<AddBoxIcon />}>
          Post a job
        </Button>
      </Box>
    </>
  );
};

export default Left;
