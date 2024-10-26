import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice'; // Adjust import as needed
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated =
    useSelector((state) => state.auth.isAuthenticated) ||
    localStorage.getItem('isAuthenticated') === 'true';

  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)'); // Media query for mobile

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Register Crime', path: '/dashboard/register-crime' },
    { text: 'About', path: '/about' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Crime Record Management
          </Typography>
          {!isMobile && (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
              </Button>
              {isAuthenticated && (
                <Button color="inherit" component={Link} to="/dashboard/register-crime">
                  Register Crime
                </Button>
              )}
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              {isAuthenticated && (
                <Button onClick={handleLogout} color="inherit">
                  Logout
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          {isAuthenticated && (
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
