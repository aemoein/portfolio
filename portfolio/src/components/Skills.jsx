// src/components/Skills.js
import React from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';

const skills = [
  'C++', 'JavaScript', 'React', 'Node.js', 'Python', 'Swift', 'MongoDB', 'Docker'
];

const Skills = () => (
  <Box sx={{ py: 10, px: 2 }}>
    <Typography variant="h3" sx={{ mb: 4 }}>
      Skills
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      {skills.map((skill) => (
        <Grid item key={skill}>
          <Chip
            label={skill}
            sx={{
              bgcolor: 'primary.main',
              color: 'background.paper',
              px: 2,
              py: 1,
            }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills;