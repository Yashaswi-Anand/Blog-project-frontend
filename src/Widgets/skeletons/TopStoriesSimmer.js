import React from "react";
import { Box, Skeleton, Grid, useMediaQuery, useTheme } from "@mui/material";

const TopStoriesShimmer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{ padding: isMobile ? 2 : 4, margin: isMobile ? "15% 5% 0 5%" : "3.8% 10% 0 10%" }}>
      
      {/* Heading Skeleton */}
      <Box display="flex" justifyContent="start" mb={2}>
        <Skeleton variant="text" width="25%" height={30} />
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          
          {/* Main Big Card */}
          <Grid item xs={12} md={7}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={isMobile ? 300 : isTablet ? 400 : 600}
              sx={{ borderRadius: 4 }}
            />
          </Grid>

          {/* Right Side Cards */}
          <Grid item xs={12} md={5} container spacing={2}>
            
            {/* Top Right Card */}
            <Grid item xs={12}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={isMobile ? 200 : isTablet ? 250 : 320}
                sx={{ borderRadius: 4 }}
              />
            </Grid>

            {/* Bottom Two Cards */}
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={isMobile ? 200 : isTablet ? 200 : 260}
                  sx={{ borderRadius: 4 }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={isMobile ? 200 : isTablet ? 200 : 260}
                  sx={{ borderRadius: 4 }}
                />
              </Grid>
            </Grid>

          </Grid>

        </Grid>
      </Box>

    </Box>
  );
};

export default TopStoriesShimmer;