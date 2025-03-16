import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

const ContentDetailsPage = () => {
  return (
    <Box sx={{ maxWidth: '70%', margin: "auto", padding: 2, marginTop: 10 }}>
      {/* Header Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        57-YO Homemaker Turns Jackfruit into Innovative Food Products, Clocks ₹12 Lakh Annually
      </Typography>
      {/* <Typography variant="body2" color="gray">
        By Ishita Ganguly | 12 Jan 2025
      </Typography> */}

      {/* Image Section */}
      <Card sx={{ marginTop: 2, position: "relative" }}>
        <CardMedia
          component="img"
          height="400"
          image="https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg" // Replace with your actual image path
          alt="Rani Sunny"
        />
      </Card>
      <Typography variant="caption" display="block" textAlign="center" mt={1}>
        Rani Sunny from Idukki, Founder of "Eden Jackfruit Products"
      </Typography>

      {/* Content Section */}
      <Typography variant="body1" mt={3}>
        Rani Sunny from Idukki in Kerala grew up surrounded by cardamom and jackfruit plantations.
        While her family harvested cardamom, jackfruit was just a common fruit for this 57-year-old homemaker,
        from which she could make chips and other traditional dishes. Now, the owner of the successful startup,
        <strong> "Eden Jackfruit Products"</strong>, Rani, who studied only up to pre-degree, is earning an annual turnover of Rs 12 Lakh.
        Rani Sunny from Idukki in Kerala grew up surrounded by cardamom and jackfruit plantations.
        While her family harvested cardamom, jackfruit was just a common fruit for this 57-year-old homemaker,
        from which she could make chips and other traditional dishes. Now, the owner of the successful startup,
        <strong> "Eden Jackfruit Products"</strong>, Rani, who studied only up to pre-degree, is earning an annual turnover of Rs 12 Lakh.
      </Typography>

      <Typography variant="h6" fontWeight="bold" mt={3}>
        How did Rani’s entrepreneurial journey begin?
      </Typography>
      <Typography variant="body1">
        A training programme in 2018, organized by Kudumbasree’s Amrutham Nutrimix on making value-added
        products from jackfruit, changed Rani’s life path. In an exclusive interview with <strong>Startup Pedia</strong>,
        Idukki’s Rani Sunny shared heA training programme in 2018, organized by Kudumbasree’s Amrutham Nutrimix on making value-added
        products from jackfruit, changed Rani’s life path. In an exclusive interview with <strong>Startup Pedia</strong>,
        Idukki’s Rani Sunny shared her journey of becoming a jackfruit entrepreneur from being a homemaker.
      </Typography>
    </Box>
  );
};

export default ContentDetailsPage