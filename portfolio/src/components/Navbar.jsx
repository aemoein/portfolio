// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar = () => (
  <AppBar position="sticky" sx={{ bgcolor: 'background.paper' }}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button color="inherit" sx={{ fontWeight: 700 }}>About</Button>
        <Button color="inherit" sx={{ fontWeight: 700 }}>Skills</Button>
        <Button color="inherit" sx={{ fontWeight: 700 }}>Projects</Button>
        <Button color="inherit" sx={{ fontWeight: 700 }}>Contact</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;