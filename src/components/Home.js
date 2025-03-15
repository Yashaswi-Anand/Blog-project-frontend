import React from 'react'
import Header from '../Navbar/Header'
import { Box } from '@mui/material'
import MostViewsBlog from '../Widgets/MostViewsBlog'
import LatestBlog from '../Widgets/LatestBlog'
import HomeBlog from '../Widgets/HomeBlog'

function Home() {
  return (
    <Box>
      <header>
        <Header />
      </header>
      <main>
        <HomeBlog/>
        <LatestBlog/>
        <MostViewsBlog/>
      </main>
    </Box>
  )
}

export default Home