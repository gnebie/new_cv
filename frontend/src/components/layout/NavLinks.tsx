import { HStack, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import GradientText from '../react-bits/GradientText';

// Liste des liens du menu
const NAV_LINKS = [
    { label: "Ce que je peux faire pour vous", href: "/#What-Can-I-Do" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Mes Services", href: "/services" },
  { label: "À propos de moi", href: "/aboutme" },
];

// Composant des liens du menu
export function NavLinks({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <VStack spacing={4} align="start">
        {NAV_LINKS.map((link) => (
        <RouterLink to={link.href} key={link.href}>
                   <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
{link.label}
</GradientText>

          </RouterLink>
        ))}
        <RouterLink to="/contact">
        
        <Button width="100%">
Contact
            </Button>
        </RouterLink>

      </VStack>
    );
  }

  return (
    <HStack spacing={6}>
      {NAV_LINKS.map((link) => (
        <RouterLink to={link.href} key={link.href}>
                   <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
{link.label}
</GradientText>
        </RouterLink>
      ))}
      <RouterLink to="/contact">
        <Button variant="outline">
Contact

        </Button>
      </RouterLink>
    </HStack>
  );
}
