import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
} from '@mui/material';
import { FlightTakeoff, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  const quickLinks = [
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
  ]
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', color: 'white', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FlightTakeoff sx={{ color: '#4eb8b6', mr: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#4eb8b6' }}>
                TravelEase
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, color: '#ccc', lineHeight: 1.6 }}>
              Your trusted travel partner for exploring incredible destinations across India. 
              Create memories that last a lifetime with our carefully curated travel experiences.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Link href='https://x.com/Prajapatiamitap' sx={{ color: '#4eb8b6', mr: 1 }}>
                <Twitter />
              </Link>
              <Link href='https://github.com/amit-prajapati-ap' sx={{ color: '#4eb8b6', mr: 1 }}>
                <GitHub />
              </Link>
              <Link href='https://www.linkedin.com/in/amit-prajapati-0544882b5/' sx={{ color: '#4eb8b6' }}>
                <LinkedIn />
              </Link>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  color="inherit"
                  underline="none"
                  sx={{
                    mb: 1,
                    color: '#ccc',
                    '&:hover': { color: '#4eb8b6' },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Popular Destinations */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Popular Destinations
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {['Kashmir', 'Kerala', 'Goa', 'Rajasthan', 'Himachal Pradesh'].map((item) => (
                <Link
                  key={item}
                  href="/"
                  color="inherit"
                  underline="none"
                  sx={{
                    mb: 1,
                    color: '#ccc',
                    '&:hover': { color: '#4eb8b6' },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: '#ccc' }}>
              ✉️ apamit6239@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              <Link
                  href="https://portfolio-amit-prajapati.vercel.app/"
                  color="inherit"
                  underline="none"
                  sx={{
                    mb: 1,
                    color: '#ccc',
                    '&:hover': { color: '#4eb8b6' },
                    transition: 'color 0.3s ease',
                  }}
                >
                  🅿️ My Portfolio
                </Link>
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: '#333' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            © 2025 TravelEase. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;