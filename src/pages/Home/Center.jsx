import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import profileImg from '../../img/profile.jpg';
import { styled } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Post from './Post';
import postData from './post-data';

const StartPostBtn = styled('button')({
  width: '100%',
  height: '40px',
  padding: '5px',
  border: '1px solid rgba(0,0,0,0.3)',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: '35px',
  transition: 'all linear .1s',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.08)',
  },

  '& span': {
    color: 'rgba(0,0,0,0.6)',
    paddingLeft: '10px',
    fontSize: '12px',
  },
});

const ActionButton = styled('button')({
  borderRadius: '5px',
  border: 'none',
  padding: '4px 8px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3px',
  transition: 'all linear .1s',
  textAlign: 'left',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
  '& span': {
    color: 'rgba(0,0,0,0.5)',
    fontSize: '11px',
    fontWeight: '500',
  },
});

const SortBtn = styled('button')({
  width: '100%',
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  padding: '2px 0',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '2px',
  gap: '10px',
  '& .divider': {
    width: '100%',
    backgroundColor: 'rgba(51, 51, 51, 0.4)',
    height: '1px',
  },
  '& div': {
    display: 'flex',
    alignItems: 'center',
  },
  '& span': {
    fontSize: '9px',
    whiteSpace: 'nowrap',
  },
  '& .sortBtnLabel': {
    color: '#676767',
    paddingRight: '5px',
  },
});

const Center = () => {
  return (
    <Box>
      {/* Start a post card */}
      <Card sx={{ padding: '15px 10px' }}>
        <Stack direction='row' spacing={2} alignItems='center'>
          <img src={profileImg} width='40px' height='40px' style={{ borderRadius: '50%', objectFit: 'cover' }} alt='profile' />
          <StartPostBtn>
            <span>Start a post</span>
          </StartPostBtn>
        </Stack>
        <Stack direction='row' spacing={1} sx={{ mt: 2 }} alignItems='center' justifyContent='space-between'>
          <ActionButton>
            <ImageIcon sx={{ color: 'dodgerblue' }} />
            <span>Photo</span>
          </ActionButton>
          <ActionButton>
            <PlayArrowIcon sx={{ color: 'darkgreen' }} />
            <span>Video</span>
          </ActionButton>
          <ActionButton>
            <EventIcon sx={{ color: '#EE9A4D' }} />
            <span>Event</span>
          </ActionButton>
          <ActionButton>
            <ArticleIcon sx={{ color: 'tomato' }} />
            <span>Write article</span>
          </ActionButton>
        </Stack>
      </Card>
      {/* Sort Button */}
      <SortBtn>
        <div className='divider' />
        <div>
          <span className='sortBtnLabel'>Sort by: </span>
          <span>Top</span>
          <ArrowDropDownIcon />
        </div>
      </SortBtn>
      {/* Post Feed */}
      <Box>
        {postData.map((postItem) => {
          return <Post key={postItem.id} {...postItem} />;
        })}
      </Box>
    </Box>
  );
};

export default Center;
