import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import getTabStringName from './Constant';
import { blogCategoryByCategory } from '../utils/api';
import CircularLoading from './fancyWidgets/CircularLoading';


function ContentBlog({ content_type }) {
    const navigate = useNavigate()
    const [content_blog, setContentBlog] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const response = await blogCategoryByCategory(content_type);
            if (response?.data?.data) {
                setContentBlog(response?.data?.data);
                setIsLoading(false);
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
            {isloading ?
                <Box>
                    <CircularLoading/>
                </Box>
                : <Box>
                    {content_blog && content_blog.length > 0 && content_blog?.map((news, index) => (
                        <Card
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column', // Always column to keep image on top
                                mb: 3,
                                boxShadow: 3,
                                borderRadius: 2,
                                overflow: 'hidden',
                            }}
                        >
                            {/* Image on top */}
                            <CardMedia
                                component="img"
                                sx={{
                                    width: '100%',
                                    height: { xs: 300, sm: 350, md: 400 }, // Responsive height
                                    objectFit: 'fit-cover',
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
                                        {news.date}
                                    </Typography>
                                    <div
                                        style={{
                                            minHeight: '50px'
                                        }}
                                        dangerouslySetInnerHTML={{ __html: news?.description.substring(0, 200) + '...' }} // ✅ Renders HTML content from editor
                                    />
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
                </Box>
            }
        </div>
    );
}

export default ContentBlog;
