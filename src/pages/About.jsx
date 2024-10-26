import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const UPPOLICE_INFO = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '5rem', textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Uttar Pradesh Police
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        The Uttar Pradesh Police is the law enforcement agency for the state of Uttar Pradesh, India. 
        Established in 1861, it is one of the largest police forces in the world, responsible for maintaining law and order 
        and ensuring the safety of the citizens of Uttar Pradesh.
      </Typography>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Mission
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Our mission is to ensure the safety and security of all citizens in Uttar Pradesh by 
          providing efficient and effective law enforcement services, fostering community 
          trust, and enhancing public safety.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6">Crime Reporting</Typography>
              <Typography color="textSecondary" paragraph>
                Citizens can report crimes online, making the process quick and convenient. 
                Our officers are trained to handle all reports professionally and promptly.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6">Public Safety</Typography>
              <Typography color="textSecondary" paragraph>
                The UP Police actively work to maintain public order and safety through 
                patrolling, community engagement, and crime prevention initiatives.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6">Investigation Services</Typography>
              <Typography color="textSecondary" paragraph>
                Our dedicated investigation teams ensure thorough and fair investigations 
                of all reported crimes, bringing perpetrators to justice swiftly.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          About Our Web Application
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          The UP Police Crime Records Portal is designed to provide the public and police personnel 
          with easy access to crime records and related services. 
          This web application allows users to:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">Search for available crime records by district, tehsil, or police station.</Typography>
          </li>
          <li>
            <Typography variant="body1">Access and manage crime records securely for authorized police personnel.</Typography>
          </li>
          <li>
            <Typography variant="body1">Report crimes and provide important information to the police online.</Typography>
          </li>
          <li>
            <Typography variant="body1">Enhance public awareness and engagement in community safety efforts.</Typography>
          </li>
        </ul>
      </Box>

      <Box my={4}>
        <Typography variant="h5" color="textSecondary">
          Together, we can build a safer Uttar Pradesh for everyone!
        </Typography>
      </Box>
    </Container>
  );
};

export default UPPOLICE_INFO;
