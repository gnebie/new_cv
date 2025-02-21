import { Box } from "@chakra-ui/react";
import { Suspense, lazy } from 'react';
import CaseStudies from "./landing/CaseStudies";

const HeroSection = lazy(() => import('./landing/HeroSection'));
const ChatSection = lazy(() => import('../components/chat/ChatSection'));
const DetailedSection = lazy(() => import('../components/portfolio/DetailedSection'));
const About = lazy(() => import('./aboutme/About'));
const Experience = lazy(() => import('./landing/Experience'));
const WhyMe = lazy(() => import("./landing/WhyMe"));
const CTA = lazy(() => import("./landing/CTA"));


function Home() {
  return (
    <Box >
      <Suspense fallback={<p>Chargement...</p>}>
        <HeroSection />
        <WhyMe />
        <Experience />
        <CTA />
        <ChatSection />
        <CaseStudies />
        <CTA />
        <DetailedSection />
      </Suspense>
    </Box>
  );
}

export default Home;


