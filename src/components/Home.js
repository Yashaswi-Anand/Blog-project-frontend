import React, { Suspense, lazy } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Socials from '../Widgets/fancyWidgets/Socials'
import { useInView } from 'react-intersection-observer';
import TopStoriesShimmer from '../Widgets/skeletons/TopStoriesSimmer';
import ThreeCardSimmer from '../Widgets/skeletons/ThreeCardShimmer';

// Lazy load components
const LatestBlog = lazy(() => import('../Widgets/LatestBlog'));
const MostViewsBlog = lazy(() => import('../Widgets/MostViewsBlog'));
const HomeBlog = lazy(() => import('../Widgets/HomeBlog'));

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const { ref: latestRef, inView: latestInView } = useInView({ triggerOnce: true });
  const { ref: mostReviewsRef, inView: mostReviewsInView } = useInView({ triggerOnce: true });
  const { ref: homeBlogRef, inView: homeBlogInView } = useInView({ triggerOnce: true });

  return (
    <Box>
      <main >
        {/* Social Media */}
        <Socials />
        {/* Pages */}
        <Box sx={{ padding: isMobile ? 2 : 4, margin: isMobile ? "20% 0 0 0" : "3.8% 10% 0 10%", backgroundColor: 'background.paper', zIndex: 1000 }}>
          <Box ref={homeBlogRef}>
            {homeBlogInView && (
              <Suspense fallback={<TopStoriesShimmer/>}>
                <HomeBlog />
              </Suspense>
            )}
          </Box>
          <Box ref={mostReviewsRef}>
            {mostReviewsInView && (
              <Suspense fallback={<ThreeCardSimmer/>}>
                <MostViewsBlog />
              </Suspense>
            )}
          </Box>
          <Box ref={latestRef}>
            {latestInView && (
              <Suspense fallback={<ThreeCardSimmer/>}>
                <LatestBlog />
              </Suspense>
            )}
          </Box>
        </Box>
      </main>
    </Box>
  )
}

export default Home