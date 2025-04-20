import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, useMediaQuery, useTheme } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const HomeBlog = ({ blog_list }) => {
    const navigate = useNavigate();
    const [activeblog, setActiveBlog] = useState({});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // For screens <600px
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // For screens between 600px-900px

    useEffect(() => {
        (async () => {
            if (blog_list.length > 0) {
                setActiveBlog(blog_list[0]);
                setTimeout(() => {
                    blog_list.shift();
                }, 0);
            }
        })()
    }, [blog_list]);

    const navigateBlogPage = (story) => {
        navigate(`/content-detail/${story.category.toLowerCase()}/${story.id}`);
    };
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
                    <Typography variant="h5" fontWeight="bold" color="#007bff" gutterBottom>
                        Top Stories
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", height: "2px", background: "#007bff", marginBottom: "20px" }} />
                <Card sx={{ borderRadius: "10px", boxShadow: 3 }} onClick={() => navigateBlogPage(activeblog)}>
                    <Box sx={{ position: "relative" }} >
                        <CardMedia
                            component="img"
                            height={isMobile ? "250" : "350"}
                            image={activeblog?.image}
                            alt="Featured Story"
                            sx={{ cursor: "pointer" }}
                            objectFit='cover'
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
                            {activeblog?.category}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "95%", padding: "10px 20px 0px 20px" }}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{ color: "#0b2545", cursor: "pointer" }}
                        >
                            {activeblog?.title}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ color: "gray", fontSize: "14px" }}
                        >
                            {moment(activeblog?.created_at).format("MMM DD, YYYY")}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: "95%", padding: '0px 20px' }}>
                        <p>{activeblog?.short_description}</p>
                    </Box>
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
                    <Typography variant="h5" fontWeight="bold" color="#007bff" gutterBottom>
                        Popular
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", height: "2px", background: "#007bff", marginBottom: "20px", }} />
                {/* List of Stories */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {blog_list && blog_list.length > 0 && blog_list?.map((story, index) => (
                        <Card key={index} sx={{ display: "flex", boxShadow: 1, borderRadius: "10px" }}
                            onClick={() => navigateBlogPage(story)}>
                            <CardMedia
                                component="img"
                                sx={{
                                    width: isMobile ? 100 : 90,
                                    height: isMobile ? 85 : 85,
                                    borderRadius: "8px",
                                    cursor: "pointer"
                                }}
                                image={story?.image}
                                alt={story.title}
                            />
                            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <Box sx={{ padding: 0, margin: 0 }}>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        sx={{
                                            padding: '5px 0px 0px 5px',
                                        }}
                                    >
                                        {story.title}
                                    </Typography>
                                    <p style={{ fontSize: "13px", textAlign: "left", padding: '0px 1px 0px 5px', margin: 0 }}>{story?.short_description?.substring(0, 60) + "..."}</p>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "end", padding: '0px 5px', width: "100%" }}>
                                    <AccessTime sx={{ marginLeft: "8px", color: "#999", fontSize: "14px", marginTop: "2px" }} />
                                    <Typography variant="caption" sx={{ color: "#999", marginLeft: "4px", marginRight: "15px" }}>
                                        {moment(story.created_at).format("MMM DD, YYYY")}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default HomeBlog;