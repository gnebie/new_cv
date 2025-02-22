import { Box, Heading, Text, VStack, HStack, IconButton, Input, Textarea, Button, useColorModeValue, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { useState } from "react";
import { motion } from "framer-motion";

import ChatSection from '../components/chat/ChatSection';
import MagnetLines from '../components/react-bits/MagnetLines'
import { Helmet } from "react-helmet";
import { useContactForm } from "../hooks/useContactForm";
import { SiMalt } from "react-icons/si"; // Import de l'icône Malt
import FAQ from "./FAQ";
import SplashCursor from "../components/react-bits/SplashCursor";
// import BlobCursor from "../components/react-bits/BlobCursor";
const MotionBox = motion(Box);

function Contact() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const iconHoverColor = useColorModeValue("primary.500", "secondary.500");

  // Gestion du formulaire
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isSubmitted, setIsSubmitted] = useState(false);
    const { formData, isSubmitting, isSubmitted, error, handleChange, handleSubmit } = useContactForm();
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

  return (
    <Box position="relative" width="100%" margin="auto">
            <Helmet>
    <title> Nebie Guillaume - Contact</title>
    <meta name="description" content="Page Contact de Nebie Guillaume, développeur backend Python et intégration IA." />
  </Helmet>

        <SplashCursor />
        {/* <BlobCursor /> */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-2} // ✅ Met MagnetLines derrière tout
      >
        <MagnetLines
          rows={9}
          columns={9}
          containerSize="100%"
          lineColor="tomato"
          lineWidth="0.8vmin"
          lineHeight="5vmin"
          baseAngle={0}
        />
      </Box>
    <MotionBox
      bg={bgColor}
      p={8}
      borderRadius="md"
      boxShadow="lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      maxW="600px"
      mx="auto"
      mt={10}
      zIndex={10}
    >
      <VStack spacing={6} align="center">
        <Heading color={textColor}>Me Contacter</Heading>
        <Button as="a" href="/Nebie_Guillaume_CV.pdf" download colorScheme="primary">
        📄 Télécharger mon CV (PDF)
        </Button>

        <Text fontSize="lg" color={textColor}>N'hésitez pas à me contacter via mes réseaux ou le formulaire ci-dessous.</Text>

        {/* Icônes des réseaux sociaux */}
        <HStack spacing={6}>
          <Link href="https://linkedin.com/in/nebieguillaumelale" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" variant="ghost" _hover={{ color: iconHoverColor }} />
          </Link>
          <Link href="https://github.com/gnebie" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" variant="ghost" _hover={{ color: iconHoverColor }} />
          </Link>
          <Link href="https://www.malt.fr/profile/guillaumenebie" isExternal>
            <IconButton aria-label="Malt" icon={<SiMalt />} size="lg" variant="ghost" _hover={{ color: iconHoverColor }} />
        </Link>
          <Link href="mailto:guillaumelale@gmail.com">
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" variant="ghost" _hover={{ color: iconHoverColor }} />
          </Link>
        </HStack>

      <ChatSection />

      <h2 color={textColor}>Envoyez moi un mail ou discutez avec mon avatar</h2>

        <Box as="form" width="100%" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              placeholder="Votre nom"
              name="name"
              value={formData.name}
              onChange={handleChange}
              bg={useColorModeValue("surface.light.100", "surface.dark.100")}
            />
            <Input
              type="email"
              placeholder="Votre adresse e-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              bg={useColorModeValue("surface.light.100", "surface.dark.100")}
            />
            <Textarea
              placeholder="Votre message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              bg={useColorModeValue("surface.light.100", "surface.dark.100")}
            />
            <Button type="submit" colorScheme="primary" size="lg" width="100%" isDisabled={isSubmitting}>
                {isSubmitted ? "Message envoyé ✅" : isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </Button>
            {error && <Text color="red.500">{error}</Text>}
          </VStack>
        </Box>
        <FAQ />
      </VStack>
    </MotionBox>
    </Box>
  );
}

export default Contact;
