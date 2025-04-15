import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, useTheme, useMediaQuery } from "@mui/material";
import { getBlogById } from "../utils/api";
import { useNavigate } from "react-router-dom";

const ContentDetailsPage = () => {
  const navigate = useNavigate();
  const [contentBlog, setContentBlog] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    (async () => {
      try {
        const blog_id = window.location.pathname.split("/").pop();
        const response = await getBlogById(blog_id);
        if (response?.data?.data) {
          setContentBlog(response?.data?.data);
        } else if (response.data.code === 404) {
          navigate("/not-found-page");
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);
  return (
    <Box sx={{ margin: isMobile ? "5rem 1rem" : "5rem 10rem" }}>
      {/* Header Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {contentBlog?.title}
      </Typography>
      {/* <Typography variant="body2" color="gray">
        By Ishita Ganguly | 12 Jan 2025
      </Typography> */}

      {/* Image Section */}
      <Card sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="400"
          image={contentBlog?.image}
          alt={contentBlog?.category}
          sx={{ objectFit: "unset" }}
        />
      </Card>
      <Typography variant="caption" display="block" textAlign="center" mt={1}>
        {contentBlog?.category}
      </Typography>

      {/* Content Section */}
      <div
        style={{
          padding: '10px',
          minHeight: '100px'
        }}
        dangerouslySetInnerHTML={{ __html: contentBlog?.description }} // ✅ Renders HTML content from editor
      />
    </Box>
  );
};

export default ContentDetailsPage