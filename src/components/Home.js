import React from 'react'
import Header from '../Navbar/Header'
import { Box } from '@mui/material'
import ImageSlider from '../Widgets/ImageSlider'

function Home() {
  return (
    <Box>
      <header>
        <Header />
      </header>
      <main>
        <ImageSlider/>
      </main>
    </Box>
  )
}

export default Home