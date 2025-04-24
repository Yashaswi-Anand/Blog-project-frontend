import React from "react";
import { Box, CardContent, useMediaQuery, Skeleton, Avatar, Card } from "@mui/material";

const ThreeCardSimmer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ padding: "20px", margin: isMobile ? "0px 5%" : "0px 10%" }}>
      {/* Heading */}
      <Box display='flex' justifyContent='start'>
        <Skeleton variant="text" sx={{ fontSize: '1rem', width: '15%' }} />
      </Box>
      <Box sx={{ width: "100%", height: "2px", marginBottom: "20px" }} />

      {/* News Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          gap: 1,
          flexWrap: "wrap"
        }}
      >
        {[1,2,3].map((_, index) => (
          <Card
            key={index}
            sx={{
              width: isMobile ? "100%" : "31.5%",
              borderRadius: "10px",
              boxShadow: 3
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={180}
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
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Skeleton style={{ width: "4%", marginRight: "5px", marginTop: "5px", height: "15px" }} variant="circular"><Avatar /></Skeleton>
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '15%' }} />
              </Box>
              <Skeleton variant="text" sx={{ fontSize: '1rem', width: '70%' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem', width: '99%' }} />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ThreeCardSimmer;