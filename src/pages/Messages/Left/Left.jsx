import React from 'react';
// MUI
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import CustomMenu from '../../../components/CustomMenu';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
// data
import { messagesData } from '../data';
// Custom components
import SingleMessage from './SingleMessage';
import SearchBox from './SearchBox';

const menuData = {
  menuIcon: <MoreHorizIcon fontSize='small' />,
  menuItems: [
    {
      itemTitle: 'Manage conversations',
    },
    {
      itemTitle: 'Message request inbox',
    },
    {
      itemTitle: 'Set away message',
    },
  ],
};

const Left = ({ setFocus }) => {
  return (
    <Card variant='outlined'>
      <Box sx={{ padding: '12px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography component='h1' sx={{ fontSize: '14px', fontWeight: '500', color: grey[900], marginLeft: '5px' }}>
            Messaging
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <CustomMenu menuIcon={menuData.menuIcon} menuItems={menuData.menuItems} />
            <IconButton sx={{ padding: '2px' }} onClick={() => setFocus(true)}>
              <CreateIcon fontSize='small' />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ padding: '10px' }}>
        <SearchBox />
      </Box>
      <Divider />
      <Box sx={{ maxHeight: '600px', overflowY: 'scroll' }}>
        {messagesData.map((item) => (
          <SingleMessage key={item.id} {...item} />
        ))}
      </Box>
    </Card>
  );
};

export default Left;
