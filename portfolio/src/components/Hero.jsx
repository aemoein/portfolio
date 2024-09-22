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
      <a href="https://drive.google.com/uc?export=download&id=162YqgowDHboTAoC8SC6rxaiuGFfjjyQ9" target="_blank" rel="noopener noreferrer">
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
      </a>
    </Box>
  );
};

export default Hero;