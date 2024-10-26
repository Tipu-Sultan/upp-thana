import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bannerImage from '../assets/upp.png'; // Adjust the path to your image

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated) || localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '5rem' }}>
      <img
        src={bannerImage} // Ensure the image path is correct
        alt="UP Police Banner"
        style={{ width: '40%', height: '20%', borderRadius: '8px', marginBottom: '2rem' }}
      />
      <Typography variant="h3" gutterBottom>
        UP Police Crime Records Portal
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Welcome to the UP Police Crime Records Portal. Here, the public can search for available crime records, and authorized police personnel can log in to manage crime records securely.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" component={Link} to="/search" style={{ marginRight: '1rem' }}>
          Search Crime Records
        </Button>
        {!isAuthenticated && (
          <Button variant="outlined" color="primary" component={Link} to="/login">
            Police Login
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Home;
