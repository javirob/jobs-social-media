import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { grey, blue } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import coding1 from '../../img/coding1.jpg';
import like from '../../img/like.svg';
import clap from '../../img/clap.svg';
import love from '../../img/love.svg';
import CardActions from '@mui/material/CardActions';

const Post = ({ id, avatar, name, followers, posted, text, likes, comments, shares }) => {
  return (
    <Card sx={{ marginY: '15px' }}>
      {/* Post head */}
      <Stack direction='row' spacing={1} alignItems='center' sx={{ padding: '10px' }}>
        <img src={avatar} alt='post avatar' width='40' height='40' style={{ borderRadius: '50%' }} />
        <Stack flex={1}>
          <Typography sx={{ fontSize: '12px' }}>{name}</Typography>
          <Typography sx={{ fontSize: '10px', color: grey[700] }}>{followers} followers</Typography>
          <Typography sx={{ fontSize: '10px', color: grey[700] }}>{posted} ago</Typography>
        </Stack>
        <Box sx={{ alignSelf: 'start' }}>
          <IconButton sx={{ padding: '1px' }}>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Stack>
      <Divider />
      {/* Post text */}
      <Box sx={{ padding: '10px', position: 'relative' }}>
        <Typography sx={{ maxWidth: '85%', fontSize: '12px' }}>{text}</Typography>
        <Button sx={{ position: 'absolute', right: '2px', bottom: '2px', padding: '2px 4px', fontSize: '9px', textTransform: 'unset' }}>...see more</Button>
      </Box>
      {/* Post Media */}
      <CardMedia component='img' height='194' image={coding1} alt='react' />
      {/* Post likes */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 15px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component='span'>
            <img src={like} alt='like' width='18px' />
          </Box>
          <Box component='span' sx={{ marginLeft: '-5px' }}>
            <img src={clap} alt='praise' width='18px' style={{ padding: '1px', backgroundColor: 'white', borderRadius: '50%' }} />
          </Box>
          <Box component='span' sx={{ marginLeft: '-5px' }}>
            <img src={love} alt='love' width='18px' style={{ padding: '1px', backgroundColor: 'white', borderRadius: '50%' }} />
          </Box>
          <Box component='span' sx={{ cursor: 'pointer', fontSize: '12px', paddingBottom: '4px', paddingLeft: '5px', color: grey[600], '&:hover': { color: blue[500], textDecoration: 'underline' } }}>
            {likes}
          </Box>
        </Box>
        <Box>
          <Box component='span' sx={{ cursor: 'pointer', fontSize: '12px', paddingBottom: '4px', paddingLeft: '5px', color: grey[600], '&:hover': { color: blue[500], textDecoration: 'underline' } }}>
            {comments} comments - {shares} shares
          </Box>
        </Box>
      </Box>
      <Divider />
      {/* Post actions */}
      <CardActions sx={{ marginY: '2px', paddingX: '14px' }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton size='small' sx={{ fontSize: '10px', borderRadius: '5px' }}>
            <ThumbUpIcon sx={{ marginRight: '2px' }} /> Like
          </IconButton>
          <IconButton size='small' sx={{ fontSize: '10px', borderRadius: '5px' }}>
            <InsertCommentIcon sx={{ marginRight: '2px' }} /> Comment
          </IconButton>
          <IconButton size='small' sx={{ fontSize: '10px', borderRadius: '5px' }}>
            <ShareIcon sx={{ marginRight: '2px' }} /> Share
          </IconButton>
          <IconButton size='small' sx={{ fontSize: '10px', borderRadius: '5px' }}>
            <SendIcon sx={{ marginRight: '2px' }} /> Send
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Post;
