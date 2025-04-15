import React from 'react'
import { Box } from '@mui/material'
import MostViewsBlog from '../Widgets/MostViewsBlog'
import LatestBlog from '../Widgets/LatestBlog'
import HomeBlog from '../Widgets/HomeBlog'
import Socials from '../Widgets/fancyWidgets/Socials'

function Home() {
  return (
    <Box>
      <main >
        {/* Social Media */}
        <Socials />
        {/* Pages */}
        <HomeBlog />
        <LatestBlog />
        <MostViewsBlog />
      </main>
    </Box>
  )
}

export default Home