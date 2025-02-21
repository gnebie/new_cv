import { Box } from "@chakra-ui/react";
import { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('../components/layout/HeroSection'));
const ChatSection = lazy(() => import('../components/chat/ChatSection'));
const DetailedSection = lazy(() => import('../components/portfolio/DetailedSection'));
const About = lazy(() => import('./aboutme/About'));
const Experience = lazy(() => import('./aboutme/Experience'));

function Home() {
  return (
    <Box >
      <Suspense fallback={<p>Chargement...</p>}>
        <HeroSection />
        <About />
        <ChatSection />
        <Experience />
        <DetailedSection />
      </Suspense>
    </Box>
  );
}

export default Home;


