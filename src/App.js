import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './pages/Home';
import CrimeSearch from './pages/CrimeSearch';
import NotFound from './pages/NotFound';
import Dashboard from './components/dashboard/Dashboard';
import RegisterCrime from './components/dashboard/RegisterCrime';
import VerifyEmail from './components/auth/VerifyEmail';
import Navbar from './components/Navbar';
import ProtectedRoute from './services/ProtectedRoute';
import About from './pages/About';
import CrimeView from './pages/CrimeView';

const App = () => (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/verify/:token" element={<VerifyEmail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<CrimeSearch />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />}/>
      <Route path="/dashboard/view-crimes" element={<ProtectedRoute element={<CrimeView/>} />} />
      <Route path="/dashboard/register-crime" element={<ProtectedRoute element={<RegisterCrime />} />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
