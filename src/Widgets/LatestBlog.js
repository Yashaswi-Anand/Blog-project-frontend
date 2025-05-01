import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, useMediaQuery, useTheme } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { mostRecentBlogs } from "../utils/api";
import ThreeCardSimmer from "./skeletons/ThreeCardShimmer";

const LatestBlog = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:600px)");
    const [latest_blog_data, setLatestBlog] = useState([]);
    const [is_loading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const latest_blogs_data = await mostRecentBlogs();
            if (latest_blogs_data?.data?.data) {
                setLatestBlog(latest_blogs_data?.data?.data.slice(0, 3));
            }
            setIsLoading(false);
        })()
    }, []);

    const navigateBlogPage = (story) => {
        navigate(`/content-detail/${story.category.toLowerCase()}/${story.id}`);
    };

    return (
        <Box>
            {!is_loading ?
                <Box sx={{ marginTop: 5 }}>
                    {/* Heading */}
                    <Box display='flex' justifyContent='start'>
                        <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom>
                            Latest
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", height: "2px", background: theme.palette.horizontalDivider, marginBottom: "20px" }} />

                    {/* News Cards */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: isMobile ? "center" : "space-between",
                        gap: 2,
                        flexWrap: "wrap"
                    }}>
                        {latest_blog_data && latest_blog_data.length > 0 && latest_blog_data?.map((article, index) => (
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
                </Box> : <ThreeCardSimmer />}
        </Box>
    );
};

export default LatestBlog;