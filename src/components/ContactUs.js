import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import React from 'react';

function ContactUs() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', marginTop: '100px', marginBottom: '35px' }}>
      <Card sx={{ width: '100%', p: 3, boxShadow: 3, borderRadius: 3, background: 'linear-gradient(135deg, #007bff 30%, #00d4ff 90%)', color: '#fff', overflowWrap: 'break-word' }}>
        <CardContent>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>About Us</Typography>
          <Box sx={{ width: "100%", height: "4px", background: "#fff", marginBottom: "20px", borderRadius: "2px" }} />
          <Typography variant="h5" gutterBottom><strong>Name: </strong>Anurag Anand</Typography>
          <Typography variant="h5" gutterBottom><strong>Email: </strong>anandyash1711@gmail.com</Typography>
          <Typography variant="h5" gutterBottom><strong>Phone: </strong>+91 9471487515</Typography>
          <Typography variant="h5" gutterBottom><strong>Address: </strong>Koilwar, Bhojpur, Bihar</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ContactUs