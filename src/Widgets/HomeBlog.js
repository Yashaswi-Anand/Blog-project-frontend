import React from "react";
import { Box, Typography, Card, CardMedia, useMediaQuery, useTheme, CardContent, Grid, Chip } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { styled } from '@mui/system';
import { motion } from "framer-motion";

const ZoomImage = styled(CardMedia)({
    transition: 'transform 0.5s ease',
    filter: 'blur(0.2px)',
    objectFit: 'fill',
    '&:hover': {
        transform: 'scale(1.05)',
        cursor: 'pointer',
    },
});

const HomeBlog = ({ blog_list }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 900px

    const navigateBlogPage = (story) => {
        navigate(`/content-detail/${story.category.toLowerCase()}/${story.id}`);
    };

    return (
        <Box>
            <Box display='flex' justifyContent='start'>
                <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom mt={2}>
                    Top Stories
                </Typography>
            </Box>

            <Box sx={{ width: "100%", height: "2px", bgcolor: "#007bff", marginBottom: "20px" }} />

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {/* Main Card */}
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}  // start slightly lower and invisible
                            animate={{ opacity: 1, y: 0 }}   // slide up to normal position
                            transition={{ duration: 0.6 }}   // animation duration
                        >
                            <Card
                                sx={{
                                    position: 'relative',
                                    height: isMobile ? 300 : isTablet ? 400 : 600,
                                    overflow: 'hidden',
                                    borderRadius: 4,
                                }}
                                onClick={() => navigateBlogPage(blog_list[0])}
                            >
                                <ZoomImage
                                    component="img"
                                    height="100%"
                                    image={blog_list[0]?.image}
                                    alt="Main blog"
                                />
                                <CardContent
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.45)',
                                        color: 'lavender',
                                        width: '100%',
                                        paddingBottom: '5px !important',
                                    }}
                                >
                                    <Chip label={blog_list[0]?.category} size="small" color="primary" sx={{ mb: 1 }} />
                                    <Typography
                                        fontSize={isMobile ? 12 : isTablet ? 14 : 16}
                                        className="text-wrap"
                                        fontWeight="bold"
                                        sx={{
                                            '&:hover': {
                                                color: '#00bcd4',
                                                cursor: 'pointer',
                                            },
                                            textWrap: 'balance'
                                        }}>
                                        {blog_list[0]?.title}
                                    </Typography>
                                    <Box display="flex" justifyContent='end' alignItems="center" mt={1} mr={4}>
                                        <AccessTime sx={{ width: 20, height: 20, mr: 1 }} />
                                        <Typography variant="caption">
                                            {moment(blog_list[0]?.date).format("MMMM D, YYYY")}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    {/* Side Cards */}
                    <Grid item xs={12} md={5} container spacing={2}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}  // start slightly lower and invisible
                                animate={{ opacity: 1, y: 0 }}   // slide up to normal position
                                transition={{ duration: 0.6 }}   // animation duration
                            >
                                <Card
                                    sx={{
                                        position: 'relative',
                                        height: isMobile ? 200 : isTablet ? 250 : 320,
                                        overflow: 'hidden',
                                        borderRadius: 4
                                    }}
                                    onClick={() => navigateBlogPage(blog_list[1])}
                                >
                                    <ZoomImage
                                        component="img"
                                        height="100%"
                                        image={blog_list[1]?.image}
                                        alt="Blog 1"
                                    />
                                    <CardContent
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            background: 'rgba(0,0,0,0.4)',
                                            color: 'lavender',
                                            width: '100%',
                                            padding: 1,
                                            paddingBottom: '5px !important'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                            <Chip label={blog_list[1]?.category} color="primary" size="small" />
                                            <Box display="flex" alignItems="center" marginRight={2}>
                                                <AccessTime sx={{ width: 20, height: 20, mr: 1 }} />
                                                <Typography variant="caption">
                                                    {moment(blog_list[1]?.date).format("MMMM D, YYYY")}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontSize={isMobile ? 12 : isTablet ? 14 : 16}
                                            mt={1}
                                            fontWeight="bold"
                                            sx={{
                                                '&:hover': {
                                                    color: '#00bcd4',
                                                    cursor: 'pointer',
                                                },
                                                textWrap: 'auto'
                                            }}>
                                            {blog_list[1]?.title}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>

                        {/* Two Small Cards */}
                        <Grid item xs={12} container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}  // start slightly lower and invisible
                                    animate={{ opacity: 1, y: 0 }}   // slide up to normal position
                                    transition={{ duration: 0.6 }}   // animation duration
                                >
                                    <Card
                                        sx={{
                                            position: 'relative',
                                            height: isMobile ? 200 : isTablet ? 200 : 260,
                                            overflow: 'hidden',
                                            borderRadius: 4
                                        }}
                                        onClick={() => navigateBlogPage(blog_list[2])}
                                    >
                                        <ZoomImage
                                            component="img"
                                            height="100%"
                                            image={blog_list[2]?.image}
                                            alt="Blog 2"
                                        />
                                        <CardContent
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                background: 'rgba(0,0,0,0.4)',
                                                color: 'lavender',
                                                width: '100%',
                                                padding: 1,
                                                paddingBottom: '5px !important'
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Chip label={blog_list[1]?.category} color="primary" size="small" />
                                                <Box display="flex" alignItems="center" marginRight={2}>
                                                    <AccessTime sx={{ width: 20, height: 20, mr: 1 }} />
                                                    <Typography variant="caption">
                                                        {moment(blog_list[1]?.date).format("MMMM D, YYYY")}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Typography
                                                fontSize={isMobile ? 12 : isTablet ? 14 : 16}
                                                mt={1}
                                                fontWeight="bold"
                                                sx={{
                                                    '&:hover': {
                                                        color: '#00bcd4',
                                                        cursor: 'pointer',
                                                    },
                                                    textWrap: 'balance'
                                                }}>
                                                {blog_list[2]?.title.substring(0, 50) + '...'}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}  // start slightly lower and invisible
                                    animate={{ opacity: 1, y: 0 }}   // slide up to normal position
                                    transition={{ duration: 0.6 }}   // animation duration
                                >
                                    <Card
                                        sx={{
                                            position: 'relative',
                                            height: isMobile ? 200 : isTablet ? 200 : 260,
                                            borderRadius: 4,
                                            overflow: 'hidden',
                                        }}
                                        onClick={() => navigateBlogPage(blog_list[3])}
                                    >
                                        <ZoomImage
                                            component="img"
                                            height="100%"
                                            image={blog_list[3]?.image}
                                            alt="Blog 3"
                                        />
                                        <CardContent
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                background: 'rgba(0,0,0,0.4)',
                                                color: 'lavender',
                                                width: '100%',
                                                padding: 1,
                                                paddingBottom: '5px !important'
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Chip label={blog_list[1]?.category} color="primary" size="small" />
                                                <Box display="flex" alignItems="center" marginRight={2}>
                                                    <AccessTime sx={{ width: 20, height: 20, mr: 1 }} />
                                                    <Typography variant="caption">
                                                        {moment(blog_list[1]?.date).format("MMMM D, YYYY")}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Typography fontSize={isMobile ? 12 : isTablet ? 14 : 16} mt={1}
                                                fontWeight="bold"
                                                sx={{
                                                    '&:hover': {
                                                        color: '#00bcd4',
                                                        cursor: 'pointer',
                                                    },
                                                    textWrap: 'balance'
                                                }}>
                                                {blog_list[3]?.title.substring(0, 50)}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomeBlog;