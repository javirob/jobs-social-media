import React from 'react';
import { grey, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const SearchWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
  border: '1px solid #d5d5d5',
  borderRadius: '3px',
  backgroundColor: blue[50],
  padding: '0 5px',
  '&:hover': {
    borderColor: '#666',
  },

  '& input': {
    backgroundColor: 'transparent',
    padding: '5px 0',
    outline: 'none',
    border: 'none',
    width: '100%',
    fontSize: '12px',
    color: grey[800],

    '&::placeholder': {
      fontSize: '12px',
    },
  },
});

const SearchBox = () => {
  return (
    <SearchWrapper>
      <SearchIcon sx={{ color: grey[700], fontSize: '15px' }} />
      <input type='text' placeholder='Search messages' />
      <TuneIcon sx={{ color: grey[700], fontSize: '15px' }} />
    </SearchWrapper>
  );
};

export default SearchBox;
