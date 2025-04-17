import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import MostViewsBlog from '../Widgets/MostViewsBlog'
import LatestBlog from '../Widgets/LatestBlog'
import HomeBlog from '../Widgets/HomeBlog'
import Socials from '../Widgets/fancyWidgets/Socials'
import { useState } from 'react'
import { getBlogList } from '../utils/api'
import LoadingWidget from '../Widgets/fancyWidgets/Loading';

function Home() {
  const [blog_list, setBlogList] = useState([]);
  const [is_loading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await getBlogList();
      if (response?.data?.data) {
        setBlogList(response?.data?.data);
        setIsLoading(false);
      }
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
              <MostViewsBlog />
              <LatestBlog />
            </Box>
            : <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
              <LoadingWidget />
            </Box>
          }
        </Box>
      </main>
    </Box>
  )
}

export default Home