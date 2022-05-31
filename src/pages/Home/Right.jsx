import React from 'react';
import ups from '../../img/ups.jpg';
import fedex from '../../img/fedex.jpg';
import daft from '../../img/daft.jpg';
import Box from '@mui/material/Box';
import AddBox from '../../components/AddBox';

const adds = [
  {
    id: 1,
    img: ups,
    name: 'ups',
    title: 'Deliver your things with us...',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing...!',
  },
  {
    id: 2,
    img: fedex,
    name: 'fedex',
    title: 'Fastest deliveries in Ireland!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisi...',
  },
  {
    id: 3,
    img: daft,
    name: 'daft',
    title: 'Find your dream home!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisi...',
  },
];

const Right = () => {
  return (
    <Box sx={{ position: 'fixed' }}>
      <AddBox adds={adds} />
    </Box>
  );
};

export default Right;
