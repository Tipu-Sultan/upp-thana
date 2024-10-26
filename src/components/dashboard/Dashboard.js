import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '5rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Police Dashboard
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Welcome to the UP Police Crime Management Dashboard. Here, you can manage and register crime records for individuals.
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/dashboard/register-crime"
          style={{ marginRight: '1rem' }}
        >
          Register New Crime
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/dashboard/view-crimes">
          View Crime Records
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
