import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import CardText2 from './CardText2';
import MiniText from './MiniText';

const CustomMenuItem = ({ itemIcon, itemTitle, itemText, handleClose }) => {
  return (
    <MenuItem onClick={handleClose}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {itemIcon || ''}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <CardText2 text={itemTitle} />
          {itemText && <MiniText text={itemText} />}
        </Box>
      </Box>
    </MenuItem>
  );
};

export default CustomMenuItem;
