import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, Box } from '@mui/material';
import { mostRecentBlogs } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function ContentSideBlog() {
  const navigate = useNavigate();
  const [latest_blog, setLatestBlog] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await mostRecentBlogs();
      if (response?.data?.data) {
        setLatestBlog(response?.data?.data);
      }
    })()
  }, []);

  const navigateBlogPage = (story) => {
    navigate(`/content-detail/${story.category.toLowerCase()}/${story.id}`);
  };

  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, borderBottom: '3px solid #00bcd4', display: 'inline-block' }}>
        Latest Stories
      </Typography>

      <List>
        {latest_blog && latest_blog.length > 0 && latest_blog?.map((story, index) => (
          <Box key={index} onClick={() => navigateBlogPage(story)}>
            <ListItem alignItems="flex-start" sx={{ cursor: 'pointer' }}>
              <ListItemAvatar>
                <Avatar src={story.image} variant="rounded" sx={{ width: 70, height: 70 }} />
              </ListItemAvatar>
              <ListItemText
                primary={story.title}
                secondary={
                  <Typography component="span" variant="caption" color="text.secondary">
                    {story.date}
                  </Typography>
                }
                sx={{ ml: 2 }}
              />
            </ListItem>
            {index < latest_blog.length - 1 && <Divider component="li" />}
          </Box>
        ))}
      </List>
    </div>
  );
}
export default ContentSideBlog