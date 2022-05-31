import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey, lightBlue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { jobSearches } from './jobsData';

const JobSearchesBox = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      {/* Head */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', paddingLeft: '18px' }}>
        <Typography component='h2' sx={{ fontSize: '16px', fontWeight: '500', color: grey[900] }}>
          Recent job searches
        </Typography>
        <Button sx={{ fontSize: '14px', color: grey[600], textTransform: 'unset' }}>Clear</Button>
      </Box>
      {/* Body */}
      {jobSearches.map((item) => {
        const { id, search, location, hits } = item;
        if (id < 4) {
          return (
            <div key={id}>
              <Box sx={{ padding: '10px', paddingLeft: '18px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <Typography component='h2' sx={{ fontSize: '14px', fontWeight: '500', color: grey[600], cursor: 'pointer' }}>
                    {search} &middot;
                  </Typography>
                  <Typography component='span' sx={{ color: 'green', fontSize: '12px' }}>
                    {hits} new
                  </Typography>
                </Box>
                <Typography component='p' sx={{ color: grey[600], fontSize: '12px', fontWeight: '300', cursor: 'pointer' }}>
                  {location}
                </Typography>
              </Box>
              <Divider />
            </div>
          );
        }
      })}

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        {jobSearches.map((item) => {
          const { id, search, location, hits } = item;
          if (id > 3) {
            return (
              <div key={id}>
                <Box sx={{ padding: '10px', paddingLeft: '18px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <Typography component='h2' sx={{ fontSize: '12px', fontWeight: '500', color: grey[600], cursor: 'pointer' }}>
                      {search} &middot;
                    </Typography>
                    <Typography component='span' sx={{ color: 'green', fontSize: '11px' }}>
                      {hits} new
                    </Typography>
                  </Box>
                  <Typography component='p' sx={{ color: grey[600], fontSize: '11px', fontWeight: '300', cursor: 'pointer' }}>
                    {location}
                  </Typography>
                </Box>
                <Divider />
              </div>
            );
          }
        })}
      </Collapse>
      <Box sx={{ padding: '10px 0', display: 'flex', justifyContent: 'center' }}>
        <IconButton
          expand={expanded.toString()}
          onClick={handleExpandClick}
          aria-expanded={expanded.toString()}
          aria-label='show more'
          sx={{ borderRadius: '5px', color: lightBlue[800], padding: '4px 6px', backgroundColor: lightBlue[50] }}>
          <Typography sx={{ fontSize: '13px', fontWeight: '500', color: lightBlue[800] }}>Show More</Typography> {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
    </Card>
  );
};

export default JobSearchesBox;
