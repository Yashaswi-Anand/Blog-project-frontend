import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Avatar, useMediaQuery } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const articles = [
    {
        title: "‘Insta Maids - at Your Service in 15 mins’: Urban Company Enters the...",
        author: "ANUSHREE AJAY",
        date: "MAR 15 2025",
        image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?cs=srgb&dl=pexels-pok-rie-33563-724921.jpg&fm=jpg",
    },
    {
        title: "Rapido Set To Launch Food Delivery Service To Take On Zomato, Swiggy",
        author: "ISHITA GANGULY",
        date: "MAR 15 2025",
        image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?cs=srgb&dl=pexels-pok-rie-33563-724921.jpg&fm=jpg",
    },
    {
        title: "‘19,826 Km Roads Constructed So Far Under Bharatmala’: Nitin...",
        author: "ISHITA GANGULY",
        date: "MAR 15 2025",
        image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?cs=srgb&dl=pexels-pok-rie-33563-724921.jpg&fm=jpg",
    },
];

const MostViewsBlog = () => {
    const isMobile = useMediaQuery("(max-width:600px)");

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
                {articles.map((article, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: isMobile ? "100%" : "31.5%",
                            borderRadius: "10px",
                            boxShadow: 3
                        }}
                    >
                        <Box sx={{ position: "relative" }}>
                            <CardMedia component="img" height="180" image={article.image} alt={article.title} />
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
                                {index + 1} TYPES
                            </Typography>
                        </Box>
                        <CardContent>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#007bff", cursor: "pointer" }}>
                                {article.title}
                            </Typography>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Box display="flex" alignItems="center" mt={1}>
                                    <Avatar sx={{ width: 20, height: 20, bgcolor: "#007bff", marginRight: "8px" }}>
                                        {article.author[0]}
                                    </Avatar>
                                    <Typography variant="caption" fontWeight="bold">
                                        By {article.author}
                                    </Typography>
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

export default MostViewsBlog;