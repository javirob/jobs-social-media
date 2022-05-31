import React, { useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import PanoramaIcon from '@mui/icons-material/Panorama';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GifIcon from '@mui/icons-material/Gif';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import CustomMenu from '../../../components/CustomMenu';
import { grey } from '@mui/material/colors';
import { Typography } from '@mui/material';
import avatar from '../../../img/profile-def.svg';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

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

const CustomTextarea = styled('textarea')({
  display: 'block',
  flex: '1',
  height: '80px',
  resize: 'none',
  padding: '10px',
  outline: 'none',
  border: 'none',
  borderTop: '2px solid #ddd',
  fontFamily: 'inherit',
  color: '#333',
  '&:focus': {
    borderTop: '3px solid green',
  },
  '&.expanded': {
    height: '100%',
  },
});

const Center = ({ isFocus, setFocus }) => {
  const [expanded, setExpanded] = React.useState(false);

  const formRef = useRef();

  useEffect(() => {
    if (isFocus) {
      formRef.current.focus();
    }
  }, [isFocus]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant='outlined'>
      {/* Message Main Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' }}>
        <Box>
          <Typography component='h2' sx={{ fontSize: '13px', fontWeight: '500', color: grey[700], marginLeft: '5px' }}>
            John Doe
          </Typography>
          <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400', color: grey[600], marginLeft: '5px' }}>
            Javascript Recruiter at XXX Recruitment specialists
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <CustomMenu menuIcon={menuData.menuIcon} menuItems={menuData.menuItems} />
        </Box>
      </Box>
      {/* Divider */}
      <Divider />
      {/* Message and Form Wrapper */}
      <div style={{ height: '100%' }}>
        {/* Collapsible wrapper */}
        <Collapse in={!expanded} timeout='auto' unmountOnExit>
          {/* Message wrapper */}
          <Box sx={{ maxHeight: '448px', overflowY: 'scroll' }}>
            {/* Message header */}
            <Box sx={{ padding: '16px' }}>
              <img src={avatar} alt='avatar' width='50px' height='50px' style={{ borderRadius: '50%', display: 'inline-block', marginBottom: '5px' }} />
              <Typography sx={{ fontSize: '14px', fontWeight: '500', color: grey[800] }}>John Doe</Typography>
              <Typography sx={{ fontSize: '13px', fontWeight: '400', color: grey[800] }}> Javascript Recruiter at XXX Recruitment specialists</Typography>
            </Box>
            <Divider />
            <Box>
              {/* Message Metadatada */}
              <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', padding: '15px' }}>
                <img src={avatar} alt='avatar' width='30px' height='30px' style={{ borderRadius: '50%' }} />
                <Typography sx={{ fontSize: '12px', fontWeight: '500' }}>John Doe -</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: '300' }}>11:09 AM</Typography>
              </Box>
              {/* Message Body */}
              <Box sx={{ paddingX: { xs: '25px', sm: '45px' } }}>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '600' }} gutterBottom>
                  Web Developer Job Opportunity
                </Typography>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400' }} gutterBottom>
                  Hello XXX
                </Typography>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400' }} gutterBottom>
                  Hope you are keeping well.
                </Typography>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400' }} gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat nostrum dicta illum ipsam earum enim adipisci, esse eius eligendi modi asperiores porro maxime minima non
                  corrupti eveniet quis sint.
                </Typography>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400' }} gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat nostrum dicta illum ipsam earum enim adipisci.
                </Typography>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400' }} gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat nostrum dicta illum ipsam earum enim adipisci, esse eius eligendi modi asperiores porro maxime minima non
                  corrupti eveniet quis sint.
                </Typography>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400' }} gutterBottom>
                  Lorem ipsum dolor sit amet!
                </Typography>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400' }} gutterBottom>
                  Lorem ipsum,
                </Typography>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400', paddingTop: '10px' }} gutterBottom>
                  John Doe
                </Typography>
                <Typography component='p' sx={{ fontSize: '12px', fontWeight: '400' }} gutterBottom>
                  Javascript Recruiter at XXX Recruitment specialists
                </Typography>
              </Box>
            </Box>
          </Box>
        </Collapse>
        {/* Form */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', height: expanded && '545px' }}>
          <CustomTextarea ref={formRef} placeholder='Write a message...' className={expanded && 'expanded'} onBlur={() => setFocus(false)} />

          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more' sx={{ position: 'absolute', top: '5px', right: '5px' }}>
            <ExpandLessIcon />
          </ExpandMore>
        </Box>
        <Box sx={{ height: '60px', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: grey[100] }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: grey[100], gap: '5px' }}>
            <IconButton>
              <PanoramaIcon sx={{ color: grey[800] }} />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <GifIcon />
            </IconButton>
            <IconButton>
              <InsertEmoticonRoundedIcon />
            </IconButton>
          </Box>
          <Box>
            <Button sx={{ color: grey[900] }}>Send</Button>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
    </Card>
  );
};

export default Center;
