import { Box, Container, Typography } from '@mui/material';
import React from 'react';

function AboutUs() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', marginTop: '70px', marginBottom: '20px' }}>
      <Box sx={{ width: '100%', p: 4, boxShadow: 4, borderRadius: 3, color: '#000' }}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, letterSpacing: 1, color: '#000' }}>About Us</Typography>
          <Box sx={{ width: "80%", height: "4px", background: "#fff", margin: "0 auto 20px", borderRadius: "2px" }} />

          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            <em><span style={{ color: '#00bcd4' }}>thetech</span>Khazana</em> - Your Gateway to the Future of Technology
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            In today's fast-paced digital world, staying updated with the latest trends, gadgets, and innovations is essential.
            We bring you in-depth insights into cutting-edge technologies, from the latest smartphones and smart devices to groundbreaking apps
            and websites that make life easier, faster, and more efficient.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Our mission is simple: to keep you informed and ahead of the curve. Whether it's AI advancements, game-changing software,
            or revolutionary tech gadgets, we cover it all. We believe technology should empower, not overwhelm. That's why we break
            down complex topics into easy-to-understand, engaging content that anyone can grasp.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            At <b>TheTechKhazana</b>, we don't just report on new trends—we help you make the most of them. Our expert tips and tricks
            will enhance your experience with existing technologies, boosting efficiency and saving time.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Technology is evolving every second, and we're here to ensure you never fall behind. Join us on this journey of discovery,
            where knowledge meets innovation, and together, we embrace a smarter, more connected world. Because the future isn't coming—it's already here!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutUs;