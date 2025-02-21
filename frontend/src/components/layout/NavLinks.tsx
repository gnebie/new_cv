import { HStack, Link, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

// Liste des liens du menu
const NAV_LINKS = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Compétences", href: "/#skills" },
  { label: "À propos de moi", href: "/aboutme" },
];

// Composant des liens du menu
export function NavLinks({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <VStack spacing={4} align="start">
        {NAV_LINKS.map((link) => (
        <RouterLink to={link.href}>
            <Link key={link.href} href={link.href} fontSize="lg" mb={2}>
            {link.label}
          </Link>
          </RouterLink>
        ))}
        <RouterLink to="/contact">
            <Button as="a" href="/contact" width="100%">
            Contact
            </Button>
        </RouterLink>
      </VStack>
    );
  }

  return (
    <HStack spacing={6}>
      {NAV_LINKS.map((link) => (
        <RouterLink to={link.href}>
        <Link key={link.href} href={link.href} fontSize="lg">
          {link.label}
        </Link>
        </RouterLink>
      ))}
      <RouterLink to="/contact">
        <Button as="a" href="#contact" variant="outline">
            Contact
        </Button>
      </RouterLink>
    </HStack>
  );
}
