import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import { getBlogById } from "../utils/api";

const ContentDetailsPage = () => {
  const [contentBlog, setContentBlog] = useState([]);
  useEffect(() => {
    (async () => {
      const blog_id = window.location.pathname.split("/").pop();
      const response = await getBlogById(blog_id);
      if (response?.data?.data) {
        setContentBlog(response?.data?.data);
      }
    })()
  }, []);
  return (
    <Box sx={{ maxWidth: '70%', margin: "auto", padding: 2, marginTop: 10 }}>
      {/* Header Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {contentBlog?.title}
      </Typography>
      {/* <Typography variant="body2" color="gray">
        By Ishita Ganguly | 12 Jan 2025
      </Typography> */}

      {/* Image Section */}
      <Card sx={{ marginTop: 2, position: "relative" }}>
        <CardMedia
          component="img"
          height="400"
          image={contentBlog?.image}
          alt={contentBlog?.category}
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
        dangerouslySetInnerHTML={{ __html:  contentBlog?.description }} // ✅ Renders HTML content from editor
      />
    </Box>
  );
};

export default ContentDetailsPage