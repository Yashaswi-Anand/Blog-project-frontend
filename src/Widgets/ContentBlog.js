import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import getTabStringName from './Constant';
import { blogCategoryByCategory } from '../utils/api';


function ContentBlog({ content_type }) {
    const navigate = useNavigate()
    const [content_blog, setContentBlog] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await blogCategoryByCategory(content_type);
            if (response?.data?.data) {
                setContentBlog(response?.data?.data);
            }
        })()
    }, [content_type]);

    const handleNavigationToThatBlog = (data) => {
        navigate(`/content-detail/${content_type}/${data.id}`);
    };

    return (
        <div>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#000', mb: 2, borderBottom: '3px solid #00bcd4', display: 'inline-block' }}>
                {getTabStringName(content_type)}
            </Typography>

            {/* Cards */}
            {content_blog && content_blog.length > 0 && content_blog?.map((news, index) => (
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
                        onClick={() => handleNavigationToThatBlog(news)}
                        image={news.image}
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
                                {/* By <b>{news.author}</b> &nbsp; {news.date} */}
                                {news.date}
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
                                onClick={() => handleNavigationToThatBlog(news)}
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
