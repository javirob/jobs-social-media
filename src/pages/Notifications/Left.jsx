import React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardTitle from '../../components/CardTitle';
import CardText from '../../components/CardText';
import ButtonLink from '../../components/ButtonLink';

const Left = () => {
  return (
    <Card variant='outlined'>
      <CardContent sx={{ padding: '12px !important' }}>
        <CardTitle title='Notifications' />
        <CardText text='You’re all caught up! Check back later for new notifications' />
        <Divider sx={{ marginY: '15px' }} />
        <CardText text='Improve your notifications' />
        <ButtonLink>View settings</ButtonLink>
      </CardContent>
    </Card>
  );
};

export default Left;
