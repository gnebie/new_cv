import { useState } from "react";
import {
  Flex,
  Text,
  Button,
  HStack,
  Link,
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLinks } from "./NavLinks";
import { Link as RouterLink } from "react-router-dom";
import Aurora from "../../components/react-bits/Aurora";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleMenu = () => setShowMenu(!showMenu);

  // Utilisation des couleurs du thème
  const bgLogoColor = useColorModeValue("background.light", "background.dark");

  const bgColor = useColorModeValue("transparent", "transparent"); // ✅ Permet de voir l'Aurora derrière
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const hoverColor = useColorModeValue("secondary.500", "secondary.400");
  const auroraColors = useColorModeValue(
    ["#3A29FF", "#FF94B4", "#FF3232"], // 🎨 Mode Clair
    ["#00FFAA", "#3300FF", "#8800FF"]  // 🎨 Mode Sombre
  );

  return (
    <Box position="relative">
      {/* Aurora en arrière-plan */}
      <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="-1">
        <Aurora colorStops={auroraColors} speed={0.5} />
      </Box>

      <Flex
        as="nav"
        bg={bgColor}
        padding="1.2rem"
        color={textColor}
        align="center"
        justify="space-between"
        boxShadow="md"
        position="fixed"
        top="0"
        width="100%"
        zIndex="1000"
      >
        {/* Logo */}
        <RouterLink to="/" fontSize="lg" mb={2}>
          <Text fontSize="xl" fontWeight="bold" cursor="pointer" _hover={{ color: hoverColor }}>
            NEBIE Guillaume
          </Text>
        </RouterLink>

        {/* Navigation pour écrans larges */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <NavLinks />
        </HStack>

        {/* Icônes (Mode sombre & Menu mobile) */}
        <HStack spacing={4} bg={bgLogoColor}>
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
          <IconButton
            aria-label="Ouvrir le menu"
            icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
            size="lg"
            display={{ base: "flex", md: "none" }}
            onClick={toggleMenu}
            variant="ghost"
          />
        </HStack>
      </Flex>

      {/* Menu mobile */}
      {showMenu && (
        <Flex
          direction="column"
          bg={bgColor}
          position="absolute"
          top="4rem"
          left="0"
          width="100%"
          padding="1rem"
          zIndex="10"
          boxShadow="lg"
          transition="all 0.3s ease-in-out"
        >
          <NavLinks isMobile />
        </Flex>
      )}

      {/* Navbar Padding pour éviter le chevauchement */}
      <Box height="75px"></Box>
    </Box>
  );
}

export default Navbar;
