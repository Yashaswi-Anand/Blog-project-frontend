import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import MostViewsBlog from '../Widgets/MostViewsBlog'
import LatestBlog from '../Widgets/LatestBlog'
import HomeBlog from '../Widgets/HomeBlog'
import Socials from '../Widgets/fancyWidgets/Socials'
import { useState } from 'react'
import { getBlogList, mostRecentBlogs, mostViewedBlogs } from '../utils/api'
import LoadingWidget from '../Widgets/fancyWidgets/Loading';

function Home() {
  const [blog_list, setBlogList] = useState([]);
  const [most_viewed_blog, setMostViewedBlog] = useState([]);
  const [latest_blog, setLatestBlog] = useState([]);
  const [is_loading, setIsLoading] = useState(true);
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
        <Box>
          {!is_loading && blog_list.length > 0 ?
            <Box>
              <HomeBlog blog_list={blog_list} />
              <MostViewsBlog most_viewed_blog={most_viewed_blog} />
              <LatestBlog latest_blog_data={latest_blog} />
            </Box>
            : <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '61.3vh' }}>
              <LoadingWidget />
            </Box>
          }
        </Box>
      </main>
    </Box>
  )
}

export default Home