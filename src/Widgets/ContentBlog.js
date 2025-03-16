import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import getTabStringName from './Constant';

const newsList = [
    {
        title: '"This Is Your Sign": CRED CEO Kunal Shah Urges Bengaluru Startups To Adopt AI Before It’s Late',
        author: 'Ishita Ganguly',
        date: '15 MAR 2025',
        description: 'CRED\'s Kunal Shah has urged Bengaluru startups to embrace AI or risk falling behind. He claimed...',
        img: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg',
    },
    {
        title: '‘Insta Maids - at Your Service in 15 mins’: Urban Company Enters the Quick Commerce Space With Rs 49 per Hour...',
        author: 'Anushree Ajay',
        date: '15 MAR 2025',
        description: 'With a 15-minute maid booking, the home services provider Urban Company has entered the quick...',
        img: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg',
    },
];


function ContentBlog({ content_type }) {
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate(`/content-detail/${content_type}`);
    };
    return (
        <div>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#000', mb: 2, borderBottom: '3px solid #00bcd4', display: 'inline-block' }}>
                {getTabStringName(content_type)}
            </Typography>

            {/* Cards */}
            {newsList?.map((news, index) => (
                <Card
                    key={index}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column', // Always column to keep image on top
                        mb: 3,
                        boxShadow: 3,
                        borderRadius: 2,
                        overflow: 'hidden', // Ensure rounded corners for image
                    }}
                >
                    {/* Image on top */}
                    <CardMedia
                        component="img"
                        sx={{
                            width: '100%',
                            height: { xs: 180, sm: 220, md: 250 }, // Responsive height
                            objectFit: 'cover',
                            cursor: 'pointer',
                            ':hover': { color: '#00bcd4' },
                        }}
                        onClick={() => handleNavigation()}
                        image={news.img}
                        alt={news.title}
                    />

                    {/* Content */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            p: { xs: 2, sm: 3 }, // Responsive padding
                        }}
                    >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' }, // Responsive title
                                }}
                            >
                                {news.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    my: 1,
                                    fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive meta text
                                }}
                            >
                                By <b>{news.author}</b> &nbsp; {news.date}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    mb: 2,
                                    fontSize: { xs: '0.8rem', sm: '0.9rem' }, // Responsive description
                                }}
                            >
                                {news.description}
                            </Typography>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => handleNavigation()}
                                sx={{
                                    backgroundColor: '#00bcd4',
                                    textTransform: 'none',
                                    px: 3,
                                    py: 1,
                                    fontSize: { xs: '0.75rem', sm: '0.85rem' }, // Responsive button text
                                    '&:hover': {
                                        backgroundColor: '#0097a7',
                                    },
                                }}
                            >
                                READ MORE
                            </Button>
                        </CardContent>
                    </Box>
                </Card>
            ))}
        </div>
    );
}

export default ContentBlog;
