// src/App.js
import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Box sx={{ width:"80vw", mx: "10vw" }}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </Box>
    </Box>
  );
};

export default App;