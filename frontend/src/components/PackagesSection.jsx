import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Skeleton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { fetchPackages } from '../store/slices/packagesSlice';

const PackagesSection = () => {
  const dispatch = useDispatch();
  const { items: packages, status } = useSelector((state) => state.packages);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPackages());
    }
  }, [status, dispatch]);

  const renderSkeletons = () => (
    <>
      {[...Array(6)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <Skeleton variant="rectangular" height={200} />
            <CardContent>
              <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="rectangular" width="100%" height={36} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 700,
            color: '#0b8b9e',
          }}
        >
          Top Selling Tour Packages of India
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#666',
            maxWidth: '500px',
            mx: 'auto',
            fontSize: isMobile ? '1rem' : '1.1rem',
          }}
        >
          Stay updated with our latest news and happenings through Informe.
        </Typography>

        <Grid container spacing={4}>
          {status === 'loading' ? (
            renderSkeletons()
          ) : (
            packages.map((pkg) => (
              <Grid item xs={12} sm={6} md={4} key={pkg._id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={pkg.thumbnail}
                    alt={pkg.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: 600, mb: 3, color: '#44919b', textAlign: 'center', fontSize: '1rem' }}
                    >
                      {pkg.title}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 'auto',
                        backgroundColor: '#4eb8b6',
                        '&:hover': {
                          backgroundColor: '#e55a2b',
                        },
                      }}
                      
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default PackagesSection;