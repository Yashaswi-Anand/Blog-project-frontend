import React from "react";
import { Box, Skeleton, useMediaQuery } from "@mui/material";

const ThreeCardSimmer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      {/* Heading Skeleton */}
      <Box display="flex" justifyContent="start" mb={2}>
        <Skeleton variant="text" width="15%" height={30} />
      </Box>

      {/* News Cards Skeleton */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? "100%" : "31.5%",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: 3,
              backgroundColor: "#fff", // optional to match card background
            }}
          >
            <Skeleton
              variant="rectangular"
              width="100%"
              height={180}
              animation="wave"
            />

            <Box sx={{ p: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", mb: 1 }}>
                <Skeleton
                  variant="circular"
                  width={30}
                  height={30}
                  sx={{ mr: 1 }}
                />
                <Skeleton variant="text" width="30%" height={20} />
              </Box>
              <Skeleton variant="text" width="70%" height={25} />
              <Skeleton variant="text" width="100%" height={25} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ThreeCardSimmer;