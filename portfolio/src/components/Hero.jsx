// src/components/Hero.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        Ahmed Elsayed Moein
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Software Engineer | iOS Developer | Full-Stack Developer
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          animation: 'bounce 2s infinite',
          '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Hero;