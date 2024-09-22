// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardActions, CircularProgress } from '@mui/material';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the repositories from GitHub
    fetch('https://api.github.com/users/aemoein/repos')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <section id="projects">
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card sx={{ maxWidth: 345, bgcolor: 'background.paper', color: 'text.primary' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.language ? `Built with: ${project.language}` : 'No main language specified'}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1.5 }}>
                  {project.description ? project.description : 'No description available.'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.html_url}
                  target="_blank"
                  sx={{ fontWeight: 700 }}
                >
                  View on GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Projects;