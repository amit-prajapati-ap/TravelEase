import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Link
} from '@mui/material';
import { FlightTakeoff, Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Packages',
      url: '/',
    },
    {
      name: 'Destinations',
      url: '/',
    },
    {
      name: 'About',
      url: 'https://eduturns.vercel.app/about',
    },
    {
      name: 'Contact',
      url: 'https://eduturns.vercel.app/contact',
    },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <FlightTakeoff sx={{ color: '#4eb8b6', mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: '#4eb8b6',
              flexGrow: isMobile ? 1 : 0,
            }}
          >
            TravelEase
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', ml: 4 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{
                    my: 2,
                    color: '#333',
                    display: 'block',
                    mx: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.04)',
                    },
                  }}
                >
                  <Link sx={{
                    textDecoration: 'none',
                    color: '#333',
                  }} href={item.url}>{item.name}</Link>
                </Button>
              ))}
            </Box>
          )}

          {/* Desktop Login/Signup */}
          {!isMobile && (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="outlined"
                sx={{ mr: 1, color: '#4eb8b6', borderColor: '#4eb8b6' }}
              >
                Log In
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#4eb8b6' }}>
                Sign Up
              </Button>
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ color: '#333' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.name} onClick={handleMenuClose}>
                    <Link sx={{
                    textDecoration: 'none',
                    color: '#333',
                  }} href={item.url}>{item.name}</Link>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleMenuClose}>
                  <Typography textAlign="center">Log In</Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography textAlign="center">Sign Up</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;