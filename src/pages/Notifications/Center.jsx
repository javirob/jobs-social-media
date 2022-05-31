import React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import CardText2 from '../../components/CardText2';
import MiniText from '../../components/MiniText';
import notifications from './data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CustomMenu from '../../components/CustomMenu';

const menuData = {
  menuIcon: <MoreHorizIcon />,
  menuItems: [
    {
      itemIcon: <DeleteOutlineIcon fontSize='small' />,
      itemTitle: 'Delete',
      itemText: 'Delete this notification',
    },
    {
      itemIcon: <NotificationsOffIcon fontSize='small' />,
      itemTitle: 'Turn off',
      itemText: 'Stop receiving notifications like this',
    },
  ],
};

const Center = () => {
  return (
    <Card variant='outlined'>
      {notifications.map((item) => {
        const { id, img, name, when, text } = item;
        return (
          <Box key={id}>
            <CardContent sx={{ padding: '12px !important' }}>
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <Tooltip placement='left-start' title={name}>
                  <Avatar alt={name} src={img} />
                </Tooltip>
                <CardText2 text={text} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <MiniText text={when} />
                  <CustomMenu menuIcon={menuData.menuIcon} menuItems={menuData.menuItems} />
                </Box>
              </Box>
            </CardContent>
            <Divider />
          </Box>
        );
      })}
    </Card>
  );
};

export default Center;
