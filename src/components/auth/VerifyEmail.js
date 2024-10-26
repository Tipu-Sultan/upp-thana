import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyEmail } from '../../features/authSlice';
import {useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, CircularProgress, Alert,Link } from '@mui/material';

const VerifyEmail = () => {
  const { token } = useParams(); 
  const dispatch = useDispatch();
  const [status, setStatus] = useState('loading'); 

  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        dispatch(verifyEmail(token));
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    };

    verifyUserEmail();
  }, [dispatch, token]);

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '2rem' }}>
      {status === 'loading' && <CircularProgress />}
      {status === 'success' && (
        <Alert severity="success">
          <Typography variant="h6">Email verified successfully!</Typography>
          <Typography variant="body2">You can now log in.
          <Link component={RouterLink} to="/login" color="primary">
            Login as Police Inspector
          </Link>
          </Typography>
        </Alert>
      )}
      {status === 'error' && (
        <Alert severity="error">
          <Typography variant="h6">Verification failed.</Typography>
          <Typography variant="body2">The link may be invalid or expired.</Typography>
        </Alert>
      )}
    </Container>
  );
};

export default VerifyEmail;
