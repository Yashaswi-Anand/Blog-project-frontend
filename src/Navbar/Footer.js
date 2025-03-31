import React from 'react';
import { Box, Typography, Grid, Link, IconButton, useMediaQuery } from '@mui/material';
import { Facebook, LinkedIn, Instagram, YouTube } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const footerLinks  = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions']
 
  const onHandleNavigate = (path) => {
    if (path === 'About Us') path = '/about-us';
    if (path === 'Contact Us') path = '/contact-us';
    if (path === 'Privacy Policy') path = '/privacy-policy';
    if (path === 'Terms & Conditions') path = '/terms-conditions';
    navigate(path);
  }

  return (
    <Box sx={{ 
        backgroundColor: '#000', 
        color: '#fff', 
        py: 5, 
        px: { xs: 5, sm: 5, md: 10 },
        display: 'flex',
        justifyContent: 'center'}}>

      <Grid container spacing={3} justifyContent="space-between" style={{  width: isMobile ? '100%': '75%'}}>
        
        {/* Column 1 - Logo & Description */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#00bcd4',
              mb: 1,
              fontSize: { xs: '1.5rem', sm: '1.8rem' }
            }}
          >
            thetech<span style={{ color: 'white' }}>khazana</span>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: '#ccc' }}>
            All about Gadget, AI tools, Apps, Tips & Tricks and more. 
          </Typography>
          <Box>
            <IconButton sx={{ color: '#ccc', mx: 0.5 }}>
              <Facebook sx={{ fontSize: isMobile ? '30px' : '40px'}}/>
            </IconButton>
            <IconButton sx={{ color: '#ccc', mx: 0.5 }}>
              <LinkedIn sx={{ fontSize: isMobile ? '30px' : '40px'}}/>
            </IconButton>
            <IconButton sx={{ color: '#ccc', mx: 0.5 }}>
              <Instagram sx={{ fontSize: isMobile ? '30px' : '40px'}}/>
            </IconButton>
            <IconButton sx={{ color: '#ccc', mx: 0.5 }}>
              <YouTube sx={{ fontSize: isMobile ? '30px' : '50px'}}/>
            </IconButton>
          </Box>
        </Grid>

        {/* Column 2 - About Section */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '1.2rem', sm: '1.5rem' }
            }}
          >
            ABOUT
          </Typography>
          {footerLinks.map((item, index) => (
            <Typography key={index} variant="body2" sx={{ color: '#ccc', mb: 1, '&:hover': { color: '#fff' }, cursor: 'pointer' }}>
              <Link onClick={() => onHandleNavigate(item)} underline="none" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}