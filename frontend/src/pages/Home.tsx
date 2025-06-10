import { Box, Image } from "@chakra-ui/react";
import { Suspense, lazy } from 'react';
import CaseStudies from "./landing/CaseStudies";
import { Helmet } from "react-helmet";
import Missions from "./landing/Missions";

const HeroSection = lazy(() => import('./landing/HeroSection'));
const ChatSection = lazy(() => import('../components/chat/ChatSection'));
const DetailedSection = lazy(() => import('../components/portfolio/DetailedSection'));
// const About = lazy(() => import('./aboutme/About'));
const Experience = lazy(() => import('./landing/Experience'));
const WhyMe = lazy(() => import("./landing/WhyMe"));
const CTA = lazy(() => import("./landing/CTA"));
const CTA2 = lazy(() => import("./landing/CTA2"));
const CTA3 = lazy(() => import("./landing/CTA3"));


function Home() {
  return (
    <Box >
    <Helmet>
    <title> Nebie Guillaume - Homepage</title>
    <meta name="description" content="Landing Page de Nebie Guillaume, développeur backend Python et intégration IA." />
    <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nebie Guillaume",
      "jobTitle": "Développeur Backend & Intelligence Artificielle",
      "url": "https://guillaume.nebie.com",
      "sameAs": [
        "https://www.linkedin.com/in/nebieguillaumelale",
        "https://github.com/gnebie"
      ]
    })}
  </script>
  </Helmet>

      <Suspense fallback={<p>Chargement...</p>}>
      <Box 
        position="absolute" 
        top="50" 
        zIndex="-1" 
        
        opacity="0.4" // 💡 Ajuste la transparence si besoin
      >
        <Image src="/illustration_home_2.png" width="20000px"       height="70vh"
        />
      </Box>
      <Box position="relative">
          <HeroSection />
        </Box>        <Box height="80px" />
        <WhyMe />
        <Box height="80px" />
        <Missions />
        <Box height="80px" />
        <CTA />
        <Box height="80px" />
        <Experience />
        <Box height="80px" />
        <ChatSection />
        <Box height="80px" />
        <CaseStudies />
        <Box height="80px" />
        <CTA2 />
        <CTA3 />
        <Box height="80px" />
        <DetailedSection />
      </Suspense>
    </Box>
  );
}

export default Home;


