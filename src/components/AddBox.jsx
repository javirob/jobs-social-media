import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardText2 from './CardText2';
import CustomMenu from './CustomMenu';
import AddItem from './AddItem';
import CancelIcon from '@mui/icons-material/Cancel';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const menuData = {
  menuIcon: <MoreHorizIcon fontSize='small' />,
  menuItems: [
    {
      itemIcon: <CancelIcon fontSize='small' />,
      itemTitle: 'Stop seeing this',
      itemText: 'Configure your settings',
    },
    {
      itemIcon: <PrivacyTipIcon fontSize='small' />,
      itemTitle: 'Privacy',
      itemText: 'Privacy settings',
    },
  ],
};

const AddBox = ({ adds }) => {
  return (
    <Card variant='outlined'>
      <CardContent sx={{ padding: '12px !important' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CardText2 text='Promoted' />
          <CustomMenu menuIcon={menuData.menuIcon} menuItems={menuData.menuItems} />
        </Box>
        <Box>
          {adds.map((item) => (
            <AddItem key={item.id} {...item} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddBox;
