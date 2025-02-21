import { Box } from "@chakra-ui/react";
import { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('../components/layout/HeroSection'));
const ChatSection = lazy(() => import('../components/chat/ChatSection'));
const DetailedSection = lazy(() => import('../components/portfolio/DetailedSection'));

function Home() {
  return (
    <Box >
      <Suspense fallback={<p>Chargement...</p>}>
      <HeroSection />
        <ChatSection />
        <DetailedSection />
      </Suspense>
    </Box>
  );
}

export default Home;


