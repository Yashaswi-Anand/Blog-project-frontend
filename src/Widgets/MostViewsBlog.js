import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, useMediaQuery } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { mostViewedBlogs } from "../utils/api";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const MostViewsBlog = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width:600px)");
    const [most_blog, setMostBlog] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await mostViewedBlogs();
            if (response?.data?.data) {
                setMostBlog(response?.data?.data);
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
                    Most Viewed
                </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "2px", background: "#007bff", marginBottom: "20px" }} />

            {/* News Cards */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: isMobile ? "center" : "space-between",
                    gap: 3,
                    flexWrap: "wrap"
                }}
            >
                {most_blog && most_blog.length > 0 && most_blog?.map((article, index) => (
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
                                    background: "gray",
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
                            <Box sx={{ display: "flex", justifyContent: "end" }}>
                                <AccessTime sx={{ marginLeft: "8px", color: "#999", fontSize: "16px" }} />
                                <Typography variant="caption" sx={{ color: "#999", marginLeft: "4px" }}>
                                    {moment(article.created_at).format("MMM DD, YYYY")}
                                </Typography>
                            </Box>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#007bff", cursor: "pointer" }}>
                                {article.title}
                            </Typography>
                            <Box sx={{
                                cursor: "pointer",
                                color: "inherit",
                                ":hover": { color: "#007bff" }
                            }}>
                                {(article.short_description).substring(0, 40) + "..."}
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default MostViewsBlog;