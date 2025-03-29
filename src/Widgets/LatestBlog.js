import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, useMediaQuery } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { mostRecentBlogs } from "../utils/api";
import { useNavigate } from "react-router-dom";

const LatestBlog = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width:600px)");
    const [latest_blog, setLatestBlog] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await mostRecentBlogs();
            if (response?.data?.data) {
                setLatestBlog(response?.data?.data);
            }
        })()
    }, []);

    const navigateBlogPage = (story) => {
        navigate(`/content-detail/${story.category.toLowerCase()}/${story.id}`);
    };

    return (
        <Box sx={{ padding: "20px", margin: isMobile ? "0px 5%" : "0px 10%" }}>
            {/* Heading */}
            <Box display='flex' justifyContent='start'>
                <Typography variant="h5" fontWeight="bold" color="#007bff" gutterBottom>
                    Latest
                </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "2px", background: "#007bff", marginBottom: "20px" }} />

            {/* News Cards */}
            <Box sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: isMobile ? "center" : "space-between",
                gap: 3,
                flexWrap: "wrap"
            }}>
                {latest_blog && latest_blog.length > 0 && latest_blog?.map((article, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: isMobile ? "100%" : "31.5%",
                            borderRadius: "10px",
                            boxShadow: 3
                        }}
                        onClick={() => navigateBlogPage(article)}
                    >
                        <Box sx={{ position: "relative" }}>
                            <CardMedia
                                component="img"
                                height="180"
                                image={article.image}
                                alt={article.title}
                                sx={{ cursor: "pointer" }}
                            />
                            <Typography
                                sx={{
                                    position: "absolute",
                                    bottom: 10,
                                    left: 10,
                                    background: "#007bff",
                                    color: "#fff",
                                    fontSize: "12px",
                                    padding: "4px 8px",
                                    borderRadius: "5px",
                                }}
                            >
                                {article.category}
                            </Typography>
                        </Box>
                        <CardContent>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#007bff", cursor: "pointer" }}>
                                {article.title}
                            </Typography>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Box display="flex" alignItems="center" mt={1}>
                                    {/* <Avatar sx={{ width: 20, height: 20, bgcolor: "#007bff", marginRight: "8px" }}>
                                        { "A"}
                                    </Avatar>
                                    <Typography variant="caption" fontWeight="bold">
                                        By { "Unknown"}
                                    </Typography> */}
                                </Box>
                                <Box display="flex" alignItems="center" mt={1}>
                                    <AccessTime fontSize="small" sx={{ marginLeft: "8px", color: "#999" }} />
                                    <Typography variant="caption" sx={{ color: "#999", marginLeft: "4px" }}>
                                        {article.date}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default LatestBlog;