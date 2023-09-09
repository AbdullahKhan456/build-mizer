import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../media/logo.png'
function Cover() {
  return (
    <div>
      {/* Your other landing page content */}
      
      {/* Section where you want the opaque cover */}
      <section style={{ position: 'relative' }}>
        <img src={Logo} alt="Section Background" style={{ width: '100%', height: 'auto' }} />

        {/* Opaque cover */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust color and opacity as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10%', // Adjust the padding to control the area covered by the cover
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="h4" color="white">
            Welcome to Our Website!
          </Typography>
        </Box>
      </section>
      
      {/* Other content */}
    </div>
  );
}

export default Cover;
