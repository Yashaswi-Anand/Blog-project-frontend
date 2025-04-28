import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, useTheme, useMediaQuery } from "@mui/material";
import { getBlogById } from "../utils/api";
import { useNavigate } from "react-router-dom";
import Socials from "../Widgets/fancyWidgets/Socials";
import CircularLoading from "../Widgets/fancyWidgets/CircularLoading";
import moment from "moment";

const ContentDetailsPage = () => {
  const navigate = useNavigate();
  const [contentBlog, setContentBlog] = useState([]);
  const [is_loading, setIsLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const blog_id = window.location.pathname.split("/").pop();
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await getBlogById(blog_id);
        if (response?.data?.data) {
          setContentBlog(response?.data?.data);
        } else if (response.data.code === 400) {
          navigate("/page-not-found");
        }
        setIsLoading(false);
      } catch (error) {
        navigate("/page-not-found");
        console.log(error);
      }
    })()
  }, [blog_id, navigate]);

  function enhanceImageStyles(html) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    wrapper.querySelectorAll('img').forEach(img => {
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
    });
    return wrapper.innerHTML;
  }
  return (
    <Box sx={{ margin: isMobile ? "4% 5%" : "3.7% 10%"}}>
      <Socials />
      <Box>
        {
          is_loading
            ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '46.2vh',
              marginTop: isMobile ? "10%" : "0px"
             }}>
              <CircularLoading />
            </Box>
            : <Box>
              {/* Header Section */}
              <Box sx={{ display: "flex", justifyContent: "start", paddingTop: isMobile ? "70px" : "30px", }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {contentBlog?.title}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "end", margin: 0, }}>
                <Typography variant="h6" fontSize={14} fontWeight="200" gutterBottom>
                  Posted @ {moment(contentBlog.date).format("MMMM D, YYYY")}
                </Typography>
              </Box>

              {/* Image Section */}
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  maxHeight={200}
                  image={contentBlog?.image}
                  alt={contentBlog?.category}
                  sx={{ objectFit: "unset" }}
                />
              </Card>
              <Typography variant="caption" display="block" textAlign="center" mt={1}>
                {/* {contentBlog?.category} */}
              </Typography>

              {/* Content Section */}
              <div
                style={{
                  padding: '10px',
                  minHeight: '100px',
                  overflow: 'auto',
                  overflowWrap:"anywhere"
                }}
                className="jodit-content"
                dangerouslySetInnerHTML={{ __html: enhanceImageStyles(contentBlog?.description) }} // ✅ Renders HTML content from editor
              />
            </Box>
        }
      </Box>
    </Box>
  );
};

export default ContentDetailsPage