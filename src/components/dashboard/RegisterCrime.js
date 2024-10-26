import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Box, Checkbox, FormControlLabel, Grid, CircularProgress,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registerCrime } from '../../features/crimeSlice';
import { validateFields } from '../../services/validate';

const RegisterCrime = () => {
  const dispatch = useDispatch();
  const crimeNumber = useSelector((state) => state.crime.crimeNumber);
  const [formData, setFormData] = useState({
    crimeNumber: '',
    firstName: '',
    middleName: '',
    lastName: '',
    crimeType: '',
    crimeDate: '',
    district: '',
    tehsil: '',
    policeStation: '',
    description: '',
    isFirstTimeOffender: true,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const handleCheckboxChange = (e) => {
    const isFirstTimeOffender = e.target.checked;
    setFormData({ ...formData, isFirstTimeOffender, crimeNumber: '' });
    setErrors({ ...errors, crimeNumber: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields(formData, setErrors)) return;

    setLoading(true);
    await dispatch(registerCrime(formData));
    setLoading(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, p: 3, bgcolor: '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register New Crime Record
      </Typography>
      {crimeNumber && formData?.isFirstTimeOffender && (
        <Box mt={2} bgcolor="success.main" p={2} borderRadius={2}>
          <Typography variant="h6" color="text.primary" align="center">
            Crime Number Generated: {crimeNumber}
          </Typography>
        </Box>
      )}
      <Box mt={2}>
        <Typography variant="subtitle1" color="textSecondary" align="center">
          If this is the person’s first offense, a new crime number will be generated. Otherwise, provide the existing crime number.
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isFirstTimeOffender}
              onChange={handleCheckboxChange}
              color="primary"
            />
          }
          label="Is this the person's first offense?"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Crime Number"
          name="crimeNumber"
          value={formData.crimeNumber}
          onChange={handleChange}
          error={!!errors.crimeNumber}
          helperText={errors.crimeNumber}
          disabled={formData.isFirstTimeOffender}
          sx={{ bgcolor: 'white' }}
        />

        {/* Suspect Name Fields */}
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              sx={{ bgcolor: 'white' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Middle Name (Optional)"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              sx={{ bgcolor: 'white' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              sx={{ bgcolor: 'white' }}
            />
          </Grid>
        </Grid>

        {/* District, Tehsil, Police Station Fields in one row */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="District"
              name="district"
              value={formData.district}
              onChange={handleChange}
              error={!!errors.district}
              helperText={errors.district}
              sx={{ bgcolor: 'white' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Tehsil"
              name="tehsil"
              value={formData.tehsil}
              onChange={handleChange}
              error={!!errors.tehsil}
              helperText={errors.tehsil}
              sx={{ bgcolor: 'white' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Police Station"
              name="policeStation"
              value={formData.policeStation}
              onChange={handleChange}
              error={!!errors.policeStation}
              helperText={errors.policeStation}
              sx={{ bgcolor: 'white' }}
            />
          </Grid>
        </Grid>

        <TextField
          fullWidth
          margin="normal"
          label="Crime Type"
          name="crimeType"
          value={formData.crimeType}
          onChange={handleChange}
          error={!!errors.crimeType}
          helperText={errors.crimeType}
          sx={{ bgcolor: 'white' }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Crime Date"
          type="date"
          name="crimeDate"
          InputLabelProps={{ shrink: true }}
          value={formData.crimeDate}
          onChange={handleChange}
          error={!!errors.crimeDate}
          helperText={errors.crimeDate}
          sx={{ bgcolor: 'white' }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
          sx={{ bgcolor: 'white' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Register Crime'}
        </Button>
      </form>
    </Container>
  );
};

export default RegisterCrime;
