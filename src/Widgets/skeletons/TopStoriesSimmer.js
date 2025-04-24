import React from "react";
import { Box, Card, useMediaQuery, useTheme, Skeleton, Avatar, CardContent } from "@mui/material";

const TopStortiesShimmer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 3,
        padding: isMobile ? "10px" : "20px",
        margin: isMobile ? "0px 5%" : "0px 10%",
        flexWrap: "wrap",
        marginTop: isMobile ? "15%" : "3.8%",
      }}
    >
      {/* Left Side - Featured Story */}
      <Box sx={{ width: isMobile ? "100%" : isTablet ? "60%" : "65%" }}>
        <Box display='flex' justifyContent='start' marginTop='7px'>
          <Skeleton variant="text" sx={{ fontSize: '1rem', width: '25%' }} />
        </Box>
        <Box sx={{ width: "100%", height: "2px", marginBottom: "20px" }} />
        <Card sx={{ borderRadius: "10px", boxShadow: 3 }}>
          <Box sx={{ position: "relative" }} >
            <Skeleton
              variant="rectangular"
              width="100%"
              height={350}
            />
            <Skeleton
              sx={{
                position: "absolute",
                bottom: 10,
                left: 10,
                fontSize: "12px",
                width: "20%"
              }}
            />
          </Box>
          <CardContent>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Skeleton style={{ width: "2%", marginRight: "5px", marginTop: "5px", height: "15px" }} variant="circular"><Avatar /></Skeleton>
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '15%' }} />
              </Box>
              <Skeleton variant="text" sx={{ fontSize: '1rem', width: '70%' }} />
            </Box>
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: '99%' }} />
          </CardContent>
        </Card>
      </Box>

      {/* Right Side - List of Stories */}
      <Box
        sx={{
          width: isMobile ? "100%" : isTablet ? "35%" : "30%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box display='flex' justifyContent='start' marginTop='7px'>
          <Skeleton variant="text" sx={{ fontSize: '1rem', width: '25%' }} />
        </Box>
        <Box sx={{ width: "100%", height: "2px", marginBottom: "20px", }} />
        {/* List of Stories */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Card key={index} sx={{ display: "flex", boxShadow: 1, borderRadius: "10px" }}>
              <Skeleton
                variant="rectangular"
                width="40%"
                height={88}
              />
              <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box sx={{ padding: 0, margin: 0, marginLeft: "10px" }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem', width: '30%' }} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem', width: '75%' }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end", marginRight: "10px" }}>
                  <Skeleton style={{ width: "5%", marginRight: "5px", marginTop: "5px", height: "15px" }} variant="circular"><Avatar /></Skeleton>
                  <Skeleton variant="text" sx={{ fontSize: '1rem', width: '15%' }} />
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TopStortiesShimmer;
