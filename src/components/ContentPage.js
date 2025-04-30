import React from 'react';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import ContentBlog from '../Widgets/ContentBlog';
import ContentSideBlog from '../Widgets/ContentSideBlog';

function ContentPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ margin: isMobile ? '0px' : '0px 10%' }}>
      <Box backgroundColor={theme.palette.background.paper}>
        <Container sx={{ marginTop: 10 }}>
          <Grid container spacing={4}>
            {/* Left Sidebar - Latest Stories (Hidden on Mobile) */}
            {!isMobile && (
              <Grid item xs={12} md={4}>
                <ContentSideBlog />
              </Grid>
            )}

            {/* Main Content - Trending News */}
            <Grid item xs={12} md={isMobile ? 12 : 8}>
              <ContentBlog content_type={window.location.pathname.split('/').pop()} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default ContentPage;
