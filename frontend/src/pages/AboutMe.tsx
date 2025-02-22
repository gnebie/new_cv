import { Box, Center, Text, Button, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, useColorModeValue } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
// Chargement dynamique des pages
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = lazy(() => import("./aboutme/About"));
const Skills = lazy(() => import("./aboutme/Skills"));
const Experience = lazy(() => import("./aboutme/Experiences"));
const Projects = lazy(() => import("./aboutme/Projects"));
const SoftSkills = lazy(() => import("./aboutme/SoftSkills"));
const MotionBox = motion(Box);


function AboutMe() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");

  return (
    <Box bg={bgColor} p={8}>      
    <Helmet>
    <title>À propos de Nebie Guillaume - Expert Backend Python & IA</title>
    <meta name="description" content="Découvrez Nebie Guillaume, développeur backend Python et intégration IA. Expertise en FastAPI, Flask, et automatisation IA." />
  </Helmet>

      <Suspense fallback={<p>Chargement...</p>}>
        <Accordion allowToggle defaultIndex={[0]} allowMultiple>
          {/* À PROPOS */}
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="xl" color={textColor}>🚀 À propos de moi</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Center>
                <Image maxW="200px" width="100%"
                src="public/portrait.png"
                fit="contain"
                />
            </Center>

              <About />
            </AccordionPanel>
          </AccordionItem>

          {/* COMPÉTENCES */}
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="xl" color={textColor}>📈 Compétences</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Skills />
            </AccordionPanel>
          </AccordionItem>

          {/* EXPÉRIENCE */}
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="xl" color={textColor}>💼 Expériences</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Experience />
            </AccordionPanel>
          </AccordionItem>

          {/* PROJETS */}
          {/* <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="xl" color={textColor}>🔥 Projets</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Projects />
            </AccordionPanel>
          </AccordionItem> */}

          {/* SOFTSKILLS */}
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="xl" color={textColor}>😎 Moi (derrière le développeur, un être humain)</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <SoftSkills />
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
        {/* CTA avec Animation */}
        <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Text fontSize="lg" color={textColor}>
            **Vous cherchez un expert en Backend Python & IA ?** Parlons-en !
            </Text>
            <Button as={Link} to="/contact" colorScheme="primary" size="lg" mt={3}>
            Me Contacter
            </Button>
        </MotionBox>

      </Suspense>
    </Box>
  );
}

export default AboutMe;
