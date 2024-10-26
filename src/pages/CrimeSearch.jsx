import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import api from '../services/api';

const CrimeSearch = () => {
  const [crimeNumber, setCrimeNumber] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setSearchResults([]);
    try {
      const response = await api.get(`/crime/${crimeNumber}`); // Ensure this endpoint returns an array
      setSearchResults(response.data); // Assuming response.data is an array of records
    } catch (err) {
      setError('Record not found. Please check the crime number and try again.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Crime Record Search
      </Typography>
      <form onSubmit={handleSearch}>
        <TextField
          fullWidth
          margin="normal"
          label="Enter Crime Number"
          value={crimeNumber}
          onChange={(e) => setCrimeNumber(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Search
        </Button>
      </form>
      {error && (
        <Typography color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      {searchResults.length > 0 && (
        <Box mt={4} p={2} sx={{ border: '1px solid #ccc', borderRadius: '8px' }}>
          <Typography variant="h6">Crime Record Details</Typography>
          <Grid container spacing={2}>
            {searchResults.map((record, index) => (
              <Grid item xs={12} key={index} sx={{ borderBottom: '1px solid #eee', mb: 2, pb: 2 }}>
                <Typography><strong>Crime Number:</strong> {record.crimeNumber}</Typography>
                <Typography><strong>Suspect Name:</strong> {`${record.firstName} ${record.middleName || ''} ${record.lastName}`.trim()}</Typography>
                <Typography><strong>Crime Type:</strong> {record.crimeType}</Typography>
                <Typography><strong>Police Station:</strong> {record.policeStation}</Typography>
                <Typography><strong>Date:</strong> {new Date(record.crimeDate).toLocaleDateString()}</Typography>
                <Typography><strong>Description:</strong> {record.description}</Typography>
                <Typography><strong>Registered By:</strong> {record.registeredBy.firstName + ' ' + record.registeredBy.lastName}</Typography>
                <Typography><strong>First Time Offender:</strong> {record.isFirstTimeOffender ? 'Yes' : 'No'}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default CrimeSearch;
