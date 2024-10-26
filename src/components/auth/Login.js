import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginInspector } from '../../features/authSlice';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [status,setStatus] = useState(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        dispatch(loginInspector(credentials));
        setStatus('success');
        navigate('/dashboard');
      } catch (error) {
        setStatus('error');
      }
    
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        Police Inspector Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="email"
          label="Email"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="password"
          label="Password"
          type="password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Login
        </Button>
      </form>
      <Box mt={2} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          First time here?{' '}
          <Link component={RouterLink} to="/register" color="primary">
            Register as Police Inspector
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
