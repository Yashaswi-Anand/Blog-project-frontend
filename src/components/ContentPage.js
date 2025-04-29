import React from 'react';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import ContentBlog from '../Widgets/ContentBlog';
import ContentSideBlog from '../Widgets/ContentSideBlog';

function ContentPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Hide on md and below

  return (
    <Container sx={{ marginTop: 10 }}>
      <Grid container spacing={4} backgroundColor={theme.palette.background.paper}>
        {/* Left Sidebar - Latest Stories (Hidden on Mobile) */}
        {!isMobile && (
          <Grid item xs={12} md={4}>
            <ContentSideBlog />
          </Grid>
        )}

        {/* Main Content - Trending News */}
        <Grid item xs={12} md={isMobile ? 12 : 8} backgroundColor={theme.palette.background.paper}>
          <ContentBlog content_type={window.location.pathname.split('/').pop()} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContentPage;
