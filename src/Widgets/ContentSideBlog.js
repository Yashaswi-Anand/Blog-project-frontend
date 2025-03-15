import React from 'react';
import { Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@mui/material';

const stories = [
  { title: "Bengaluru-based App Audition Connects Budding Actors To...", date: "MAR 15 2025", img: "https://via.placeholder.com/60" },
  { title: '"This Is Your Sign": CRED CEO Kunal Shah Urges Bengaluru Startups To...', date: "MAR 15 2025", img: "https://via.placeholder.com/60" },
  { title: "Bangalore Tech Startup Appli Launches A Mobile App That Enables Gen...", date: "MAR 15 2025", img: "https://via.placeholder.com/60" },
  { title: "‘Insta Maids - at Your Service in 15 mins’: Urban Company Enter...", date: "MAR 15 2025", img: "https://via.placeholder.com/60" },
  { title: "Rapido Set To Launch Food Delivery Service To Take On Zomato, Swiggy...", date: "MAR 15 2025", img: "https://via.placeholder.com/60" },
];

function ContentSideBlog() {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, borderBottom: '3px solid #00bcd4', display: 'inline-block' }}>
        Latest Stories
      </Typography>

      <List>
        {stories.map((story, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start" sx={{ cursor: 'pointer' }}>
              <ListItemAvatar>
                <Avatar src={story.img} variant="rounded" sx={{ width: 60, height: 60 }} />
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
            {index < stories.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
export default ContentSideBlog