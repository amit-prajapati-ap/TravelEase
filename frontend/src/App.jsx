import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import { store } from './store/store';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';
import PackagesSection from './components/PackagesSection';
import AdvantagesSection from './components/AdvantagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

// Create a theme with custom colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff6b35',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ overflowX: 'hidden' }}>
          <Navbar />
          <Box sx={{ mt: '64px' }}> {/* Offset for fixed navbar */}
            <HeroSection />
            <DestinationsSection />
            <AdvantagesSection />
            <PackagesSection />
            <TestimonialsSection />
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;