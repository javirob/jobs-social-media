import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import elon from '../../img/elon.jpg';

const contacts = [
  {
    id: 1,
    name: 'Elon Musk',
    title: 'CEO of Tesla | CEO Space X',
    since: '10 months ago',
    img: elon,
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'IT Recruiter',
    since: '5 months ago',
    img: 'https://randomuser.me/api/portraits/med/men/10.jpg',
  },
  {
    id: 3,
    name: 'Marta Smith',
    title: 'Web Developer',
    since: '5 months ago',
    img: 'https://randomuser.me/api/portraits/med/women/10.jpg',
  },
  {
    id: 4,
    name: 'Martin Rogan',
    title: 'Journalist',
    since: '6 months ago',
    img: 'https://randomuser.me/api/portraits/med/men/15.jpg',
  },
  {
    id: 5,
    name: 'Jane Lopez',
    title: 'UX/UI Designer',
    since: '5 months ago',
    img: 'https://randomuser.me/api/portraits/med/women/9.jpg',
  },
  {
    id: 6,
    name: 'Jack Darmody',
    title: 'Tech Support',
    since: '7 months ago',
    img: 'https://randomuser.me/api/portraits/med/men/8.jpg',
  },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: grey[800],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  border: '1px solid #dedede',
  borderRadius: '4px',
  fontSize: '12px',
  '&:hover': {
    outline: '1px solid black',
  },

  '& .MuiInputBase-input': {
    '&:focus': {
      outline: '1px solid black',
    },
    borderRadius: '4px',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Center = () => {
  return (
    <Card>
      {/* Section Header */}
      <Box sx={{ padding: '15px' }}>
        <Typography sx={{ fontSize: '14px', marginBottom: { xs: '10px', sm: '5px' } }}>100 Connections</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Filter */}
          <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Typography sx={{ fontSize: '12px', color: grey[600], whiteSpace: 'nowrap', paddingLeft: '5px' }}>Sort by:</Typography>
            <Select displayEmpty sx={{ '& fieldset': { border: 'none', outline: 'none' }, fontSize: '11px', color: grey[600], '& > div': { padding: '5px' } }}>
              <MenuItem sx={{ fontSize: '12px', color: grey[600] }}>First name</MenuItem>
              <MenuItem sx={{ fontSize: '12px', color: grey[600] }}>Last name</MenuItem>
              <MenuItem sx={{ fontSize: '12px', color: grey[600] }}>Recently added</MenuItem>
            </Select>
          </Box>
          {/* Search */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
          </Search>
          {/* Button */}
          <Button sx={{ fontSize: '12px', padding: '5px', textTransform: 'capitalize', whiteSpace: { xs: 'unset', sm: 'nowrap' } }}> Advanced search</Button>
        </Box>
      </Box>
      <Divider />
      {/* Section Body */}
      <Box sx={{ padding: '15px' }}>
        {/* Contact list */}
        {contacts.map((item) => {
          const { id, name, title, since, img } = item;
          return (
            <div key={id}>
              <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                <img src={img} width='50px' height='50px' style={{ borderRadius: '50%', marginRight: '20px' }} alt='avatar' />
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ display: 'inline', color: grey[700], fontWeight: 500, fontSize: '12px' }}>{name}</Typography>
                  <Typography sx={{ display: 'inline', color: grey[500], fontWeight: 400, fontSize: '12px' }}>{title}</Typography>
                  <Typography sx={{ display: 'inline', color: grey[500], fontWeight: 400, fontSize: '11px' }}>Connected {since}</Typography>
                </Box>

                <Box>
                  <Button sx={{ fontSize: '12px', padding: '5px 15px', borderRadius: '100px', textTransform: 'capitalize', marginRight: '8px' }} variant='outlined'>
                    Message
                  </Button>
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
              </Box>
              <Divider />
            </div>
          );
        })}
      </Box>
    </Card>
  );
};

export default Center;
