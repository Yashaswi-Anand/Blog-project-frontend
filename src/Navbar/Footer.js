import React from 'react';
import { Box, Typography, Grid, Link, useMediaQuery, useTheme } from '@mui/material';
import SocialOnFooter from '../Widgets/fancyWidgets/SocialOnFooter';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const footerLinks = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions']

  const onHandleNavigate = (path) => {
    if (path === 'About Us') path = '/about-us';
    if (path === 'Contact Us') path = '/contact-us';
    if (path === 'Privacy Policy') path = '/privacy-policy';
    if (path === 'Terms & Conditions') path = '/terms-conditions';
    return path;
  }

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', }}>
      <Box sx={{
        py: 5,
        display: 'flex',
        justifyContent: 'center'
      }}>

        <Grid container spacing={3} justifyContent="space-between" style={{ width: isMobile ? '100%' : '75%' }}>

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
            <Box >
              <SocialOnFooter />
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
                <Link 
                href={onHandleNavigate(item)} 
                underline="none" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        backgroundColor: '#111',
        textAlign: 'center',
        color: '#ccc',
      }}>
        <p style={{ margin: 0, padding: '5px 0px' }}><span class='fs-16'>©</span>&nbsp; 2025 Social Riser. All Rights Reserved.</p>
      </Box>
    </Box>
  );
}