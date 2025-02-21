import { useState } from 'react';
import { 
  Flex, Text, Button, HStack, Link, IconButton, useColorMode, useColorModeValue, 
  Box
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleMenu = () => setShowMenu(!showMenu);

  // Utilisation des couleurs du thème
  const bgColor = useColorModeValue("background.light", "background.dark");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const hoverColor = useColorModeValue("secondary.500", "secondary.400");

  return (
    <Box>
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
      <Text fontSize="xl" fontWeight="bold" cursor="pointer" _hover={{ color: hoverColor }}>
        Mon Site
      </Text>

      {/* Navigation pour écrans larges */}
      <HStack spacing={6} display={{ base: "none", md: "flex" }}>
        <Link href="#portfolio" fontSize="lg">Portfolio</Link>
        <Link href="#skills" fontSize="lg">Compétences</Link>
        <Link href="#about" fontSize="lg">À propos</Link>
        <Button as="a" href="#contact" variant="outline">
          Contact
        </Button>
      </HStack>

      {/* Icônes (Mode sombre & Menu mobile) */}
      <HStack spacing={4}>
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
          display={{ base: "flex", md: "none" }}
          boxShadow="lg"
          transition="all 0.3s ease-in-out"
        >
          <Link href="#portfolio" fontSize="lg" mb={3}>Portfolio</Link>
          <Link href="#skills" fontSize="lg" mb={3}>Compétences</Link>
          <Link href="#about" fontSize="lg" mb={3}>À propos</Link>
          <Button as="a" href="#contact">
            Contact
          </Button>
        </Flex>
      )}
    </Flex>
    {/* Navbar Padding */}
    <Box
      height="75px"
    >

    </Box>
    </Box>
  );
}

export default Navbar;
