"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const updates = [
  {
    id: 1,
    category: "Travel",
    message: "Weekend trip bookings are now open",
    timestamp: "2026-04-22 17:51:18",
  },
  {
    id: 2,
    category: "Food",
    message: "New café menu launched today",
    timestamp: "2026-04-22 17:50:54",
  },
  {
    id: 3,
    category: "Fitness",
    message: "Morning yoga session starts at 6 AM",
    timestamp: "2026-04-22 17:50:06",
  },
];

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Lifestyle Updates Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {updates.map((update) => (
            <Grid item xs={12} md={6} lg={4} key={update.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    {update.category}
                  </Typography>

                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {update.message}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    {update.timestamp}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}