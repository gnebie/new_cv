import { Box, Center, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, useColorModeValue } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import Aurora from "../components/react-bits/Aurora";

// Chargement dynamique des pages
const About = lazy(() => import("./aboutme/About"));
const Skills = lazy(() => import("./aboutme/Skills"));
const Experience = lazy(() => import("./aboutme/Experiences"));
const Projects = lazy(() => import("./aboutme/Projects"));

function AboutMe() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");

  return (
    <Box bg={bgColor} p={8}>
        {/* <Aurora
colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
speed={0.5}/> */}
      <Suspense fallback={<p>Chargement...</p>}>
        <Accordion allowToggle defaultIndex={[0]} allowMultiple>
          {/* À PROPOS */}
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md" color={textColor}>🚀 À propos de moi</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Center>
                <Image maxW="300px" width="100%"
                src="public/portrait.png"
                fit="contain"
                />
            </Center>

              <About />
            </AccordionPanel>
          </AccordionItem>

          {/* EXPÉRIENCE */}
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md" color={textColor}>💼 Expériences</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Experience />
            </AccordionPanel>
          </AccordionItem>

          {/* PROJETS */}
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md" color={textColor}>🔥 Projets</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Projects />
            </AccordionPanel>
          </AccordionItem>

          {/* COMPÉTENCES */}
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md" color={textColor}>📈 Compétences</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Skills />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Suspense>
    </Box>
  );
}

export default AboutMe;
