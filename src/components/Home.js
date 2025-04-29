import React, { useEffect } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import MostViewsBlog from '../Widgets/MostViewsBlog'
import LatestBlog from '../Widgets/LatestBlog'
import HomeBlog from '../Widgets/HomeBlog'
import Socials from '../Widgets/fancyWidgets/Socials'
import { useState } from 'react'
import { getBlogList, mostRecentBlogs, mostViewedBlogs } from '../utils/api'
import ThreeCardShimmer from '../Widgets/skeletons/ThreeCardShimmer'
import TopStortiesShimmer from '../Widgets/skeletons/TopStoriesSimmer'

function Home() {
  const [blog_list, setBlogList] = useState([]);
  const [most_viewed_blog, setMostViewedBlog] = useState([]);
  const [latest_blog, setLatestBlog] = useState([]);
  const [is_loading, setIsLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  useEffect(() => {
    (async () => {
      const [all_blogs, most_viewed_blogs, latest_blogs] = await Promise.all([
        getBlogList(),
        mostViewedBlogs(),
        mostRecentBlogs()
      ]);
      if (all_blogs?.data?.data) {
        setBlogList(all_blogs?.data?.data);
      }
      if (most_viewed_blogs?.data?.data) {
        setMostViewedBlog(most_viewed_blogs?.data?.data);
      }
      if (latest_blogs?.data?.data) {
        setLatestBlog(latest_blogs?.data?.data);
      }
      setIsLoading(false);
    })()
  }, []);
  return (
    <Box>
      <main >
        {/* Social Media */}
        <Socials />
        {/* Pages */}
        <Box sx={{ padding: isMobile ? 2 : 4, margin: isMobile ? "20% 0 0 0" : "3.8% 10% 0 10%", backgroundColor: 'background.paper', zIndex: 1000 }}>
          {!is_loading && blog_list.length > 0 ?
            <Box>
              <HomeBlog blog_list={blog_list} />
              <MostViewsBlog most_viewed_blog={most_viewed_blog} />
              <LatestBlog latest_blog_data={latest_blog} />
            </Box>
            : <Box>
              <TopStortiesShimmer blog_list={blog_list}/>
              <ThreeCardShimmer />
              <ThreeCardShimmer />
            </Box>
          }
        </Box>
      </main>
    </Box>
  )
}

export default Home