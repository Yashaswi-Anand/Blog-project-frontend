import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import getTabStringName from './Constant';
import { blogCategoryByCategory } from '../utils/api';
import CircularLoading from './fancyWidgets/CircularLoading';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import moment from 'moment/moment';

function ContentBlog({ content_type }) {
    const navigate = useNavigate()
    const [content_blog, setContentBlog] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1)
    const pageSize = 5
    const [total_length, setTotalLength] = useState(0);
    // const isMobiFle = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        setPage(1);
    }, [content_type]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await blogCategoryByCategory({
                page: page,
                limit: pageSize,
                content_type
            });
            if (response?.data?.data) {
                setContentBlog(response?.data?.data?.projects);
                setTotalLength(response?.data?.data?.total_length)
                setIsLoading(false);
            }
        })()
    }, [content_type, page]);

    const handleNavigationToThatBlog = (data) => {
        navigate(`/content-detail/${content_type}/${data.id}`);
    };

    const onHandleCount = async (event, value) => {
        setPage(value)
    }

    return (
        <div>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2, mt: 2, borderBottom: '3px solid #00bcd4', display: 'inline-block' }}>
                {getTabStringName(content_type)}
            </Typography>

            {/* Cards */}
            <Box>
                {isloading ?
                    <Box>
                        <CircularLoading />
                    </Box>
                    : <Box>
                        {content_blog && content_blog.length > 0 && content_blog.map((news, index) => (
                            <Card
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
                                    mb: 3,
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    height: { xs: 420, md: 250 },
                                }}
                            >
                                {/* Left Side Image (or Top on Mobile) */}
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: { xs: '100%', md: 300 },         // Full width on mobile, fixed width on desktop
                                        height: { xs: 200, md: '100%' },        // Fixed height on mobile, auto on desktop
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                        objectPosition: 'center',// Center the crop
                                        flexShrink: 0
                                    }}
                                    onClick={() => handleNavigationToThatBlog(news)}
                                    image={news.image}
                                    alt={news.title}
                                />

                                {/* Right Side Content (or Bottom on Mobile) */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flex: 1,
                                        // p: { xs: 2, sm: 3 },
                                    }}
                                >
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1rem', sm: '1rem', md: '1.3rem' },
                                                textAlign: 'justify',
                                            }}
                                        >
                                            {news.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                textAlign: 'end',
                                                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                            }}
                                        >
                                            {moment(news.date).format('MMMM DD, YYYY')}
                                        </Typography>

                                        <div
                                            style={{ minHeight: '50px', textAlign: 'justify' }}
                                            dangerouslySetInnerHTML={{ __html: news.description.substring(0, 100) + '...' }}
                                        />

                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                onClick={() => handleNavigationToThatBlog(news)}
                                                sx={{
                                                    // mt: 2,
                                                    backgroundColor: '#00bcd4',
                                                    textTransform: 'none',
                                                    // px: 3,
                                                    // py: 1,
                                                    fontSize: { xs: '0.75rem', sm: '0.85rem' },
                                                    '&:hover': {
                                                        backgroundColor: '#0097a7',
                                                    },
                                                }}
                                            >
                                                READ MORE
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                }
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Stack spacing={2}>
                    {Math.ceil(total_length / pageSize) > 1 && (
                        <Pagination
                            onChange={onHandleCount}
                            page={page}
                            count={Math.ceil(total_length / pageSize)}
                            showFirstButton
                            showLastButton
                        />
                    )}
                </Stack>
            </Box>

        </div>
    );
}

export default ContentBlog;
