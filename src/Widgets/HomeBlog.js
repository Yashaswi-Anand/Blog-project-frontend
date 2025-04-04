import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, useMediaQuery, useTheme } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { getBlogList } from "../utils/api";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const HomeBlog = () => {
    const navigate = useNavigate();
    const [blog_list, setBlogList] = useState([]);
    const [activeblog, setActiveBlog] = useState({});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // For screens <600px
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // For screens between 600px-900px

    useEffect(() => {
        (async () => {
            const response = await getBlogList();
            if (response?.data?.data) {
                setActiveBlog(response?.data?.data[0]);
                const data = response?.data?.data;
                data.shift();
                setBlogList(data);
            }
        })()
    }, []);

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
                marginTop: isMobile ? "20%" : "4%",
            }}
        >
            {/* Left Side - Featured Story */}
            <Box sx={{ width: isMobile ? "100%" : isTablet ? "60%" : "65%" }}>
                <Box display='flex' justifyContent='start'>
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
                    gap: 2,
                    marginTop: isMobile ? "20px" : "50px",
                }}
            >
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
                            <p style={{ fontSize: "13px", textAlign: "left", padding: '0px 1px 0px 5px', margin:0 }}>{story?.short_description?.substring(0, 60) + "..."}</p>
                            <Box sx={{ display: "flex", justifyContent: "end", padding: '0px 5px' }}>
                                <AccessTime sx={{ marginLeft: "8px", color: "#999", fontSize: "14px", marginTop: "2px" }} />
                                <Typography variant="caption" sx={{ color: "#999", marginLeft: "4px" }}>
                                    {moment(story.created_at).format("MMM DD, YYYY")}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default HomeBlog;