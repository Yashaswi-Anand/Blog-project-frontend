import React from 'react'
import { Box } from '@mui/material'
import MostViewsBlog from '../Widgets/MostViewsBlog'
import LatestBlog from '../Widgets/LatestBlog'
import HomeBlog from '../Widgets/HomeBlog'

function Home() {
  return (
    <Box>
      <main >
        <HomeBlog/>
        <LatestBlog/>
        <MostViewsBlog/>
      </main>
    </Box>
  )
}

export default Home