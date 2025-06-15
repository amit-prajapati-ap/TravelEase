import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          <Typography
            variant={isMobile ? 'h3' : 'h1'}
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Discover Your Next Adventure
          </Typography>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            component="p"
            sx={{
              mb: 4,
              opacity: 0.95,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              lineHeight: 1.6,
            }}
          >
            Explore breathtaking destinations, create unforgettable memories, and 
            embark on the journey of a lifetime with our carefully curated travel experiences.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#f9c001',
              color: 'black',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
              '&:hover': {
                backgroundColor: '#4eb8b6',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 16px rgba(255, 107, 53, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Book Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;