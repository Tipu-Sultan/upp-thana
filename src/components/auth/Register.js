import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerInspector } from '../../features/authSlice';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({ policeId: '', firstName: '', lastName: '', email: '', phone: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerInspector(formData));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center">Police Inspector Registration</Typography>
      <form onSubmit={handleSubmit}>
        {['policeId', 'firstName', 'lastName', 'email', 'phone', 'password'].map((field) => (
          <TextField key={field} fullWidth margin="normal" name={field} label={field} onChange={handleChange} />
        ))}
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
          <Link component={RouterLink} to="/login" color="primary">
            Login as Police Inspector
          </Link>
    </Container>
  );
};

export default Register;
