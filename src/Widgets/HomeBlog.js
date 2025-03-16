import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const stories = [
    {
        title: "‘Insta Maids - at Your Service in 15 mins’: Urban Company Enters the Quick Commerce...",
        date: "15 MAR 2025",
        image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg",
    },
    {
        title: "Rapido Set To Launch Food Delivery Service To Take On Zomato, Swiggy",
        date: "15 MAR 2025",
        image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg",
    },
    {
        title: "‘19,826 Km Roads Constructed So Far Under Bharatmala’: Nitin Gadkari",
        date: "15 MAR 2025",
        image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg",
    },
    {
        title: "Ola Electric Shuts Down Punjab Showrooms Fearing Official Raids",
        date: "15 MAR 2025",
        image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg",
    },
];

const HomeBlog = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // For screens <600px
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // For screens between 600px-900px

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
                <Card sx={{ borderRadius: "10px", boxShadow: 3 }}>
                    <Box sx={{ position: "relative" }}>
                        <CardMedia
                            component="img"
                            height={isMobile ? "250" : "350"}
                            image="https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg"
                            alt="Featured Story"
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
                            STARTUP STORIES
                        </Typography>
                    </Box>
                    <CardContent>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{ color: "#0b2545", cursor: "pointer" }}
                        >
                            Bangalore Tech Startup Appli Launches A Mobile App That Enables Gen Z Students To...
                        </Typography>
                    </CardContent>
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
                {stories.map((story, index) => (
                    <Card key={index} sx={{ display: "flex", boxShadow: 1, borderRadius: "10px" }}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: isMobile ? 70 : 90,
                                height: isMobile ? 60 : 80,
                                borderRadius: "10px",
                            }}
                            image={story.image}
                            alt={story.title}
                        />
                        <CardContent sx={{ padding: "5px 10px" }}>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                sx={{
                                    color: "#0b2545",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    ":hover": { color: "#007bff" },
                                    fontSize: "12px",
                                }}
                            >
                                {story.title}
                            </Typography>
                            <Box display="flex" justifyContent='end' alignItems="center" mt={1} color="#999">
                                <IconButton size="small" sx={{ color: "#999" }}>
                                    <AccessTime fontSize="small" />
                                </IconButton>
                                <Typography variant="caption">{story.date}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default HomeBlog;