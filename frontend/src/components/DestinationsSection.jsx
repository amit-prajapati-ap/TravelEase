import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Skeleton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { fetchDestinations } from "../store/slices/destinationsSlice";

const DestinationsSection = () => {
  const dispatch = useDispatch();
  const { items: destinations, status } = useSelector(
    (state) => state.destinations
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDestinations());
    }
  }, [status, dispatch]);

  const renderSkeletons = () => (
    <>
      {[...Array(6)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <Skeleton variant="rectangular" height={200} />
            <CardContent>
              <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
              <Skeleton variant="text" width="60%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );

  return (
    <Box sx={{ py: 8, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h2"
          sx={{
            textAlign: "center",
            mb: 2,
            fontWeight: 700,
            color: "#2692a0",
          }}
        >
          Explore Most Popular Destinations
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "#666",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Plan your perfect trip with our most loved and best-selling tour packages.
        </Typography>

        <Grid container spacing={4}>
          {status === "loading"
            ? renderSkeletons()
            : destinations.map((destination) => (
                <Grid item xs={12} sm={6} md={4} key={destination._id}>
                  <Card
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={destination.thumbnail}
                      alt={destination.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: 600, mb: 1, color: "#2692a0" }}
                      >
                        {destination.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          display: "flex",
                          gap: "0.5rem"
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#333",
                            fontWeight: 700,
                          }}
                        >
                          Starting from 
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#2692a0",
                            fontWeight: 700,
                          }}
                        >
                          ₹{destination.price.toLocaleString()}/-
                        </Typography>
                        
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DestinationsSection;
