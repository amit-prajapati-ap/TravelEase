import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  AccessTime,
  AttachMoney,
  Security,
  ViewModule,
} from "@mui/icons-material";

const AdvantagesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const advantages = [
    {
      icon: <AccessTime sx={{ fontSize: 50, color: "#4caf50" }} />,
      title: "Save Time",
      description:
        "No more switching for packages or plans.",
    },
    {
      icon: <AttachMoney sx={{ fontSize: 50, color: "#4caf50" }} />,
      title: "Save Money",
      description:
        "Compare, negotiate, and choose the best.",
    },
    {
      icon: <Security sx={{ fontSize: 50, color: "#4caf50" }} />,
      title: "Trusted Network",
      description:
        "A Trusted Network of 7000+ Travel Agents",
    },
    {
      icon: <ViewModule sx={{ fontSize: 50, color: "#4caf50" }} />,
      title: "Multiple Options",
      description: "Itineraries & Travel Tips from Trusted Agents",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#77c8c9" }}>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h2"
          sx={{
            textAlign: "center",
            mb: 1,
            fontWeight: 700,
            color: "white",
          }}
        >
          Our Advantages
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "#656565",
            maxWidth: "500px",
            mx: "auto",
            fontSize: isMobile ? "0.7rem" : "0.8rem",
          }}
        >
          You can rely on our experience and the quality of services we provide. Here are other reasons to book tours at Treat Holidays
        </Typography>

        <Grid container spacing={4}>
          {advantages.map((advantage, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  backgroundColor: "white",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 2 }}>{advantage.icon}</Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mb: 2, fontWeight: 600, color: "#333" }}
                  >
                    {advantage.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666", lineHeight: 1.6 }}
                  >
                    {advantage.description}
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

export default AdvantagesSection;
