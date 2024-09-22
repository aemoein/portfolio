// src/components/About.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => (
  <Box sx={{ py: 10, px: 2 }}>
    <Typography variant="h3" sx={{ mb: 2 }}>
      About Me
    </Typography>
    <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto' }}>
    I am a detail-oriented and enthusiastic Software Engineer with a solid foundation in multiple programming languages and a strong passion for technology. I am proficient in database management and experienced in designing and architecting software systems, ensuring that each solution I deliver is robust, scalable, and efficient. I enjoy taking on new challenges and am always eager to contribute to innovative projects that push the boundaries of technology.
    </Typography>
  </Box>
);

export default About;