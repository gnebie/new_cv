import { Box, Button, HStack, Icon, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

export default function StickyCTA() {
  // Couleurs semi-transparentes pour garder le contexte visible
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const [visible, setVisible] = useState(true);

  // Exemple de show/hide au scroll : on masque en scroll down, on réaffiche en up
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currY = window.scrollY;
      setVisible(currY < lastY || currY < 100);
      lastY = currY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <MotionBox
          as="header"
          position="sticky"
          top={0}
          zIndex={20}
          bg={bg}
          backdropFilter="saturate(180%) blur(10px)"
          py={3}
          px={4}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          boxShadow="sm"
        >
          <HStack justify="center" spacing={4}>
            <MotionBox animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Button
                as={Link}
                to="/contact"
                size={buttonSize}
                colorScheme="primary"
                leftIcon={<Icon as={FaPhoneAlt} />}
                variant="solid"
                fontWeight="bold"
                borderRadius="full"
                boxShadow="md"
                _hover={{ boxShadow: "lg", scale: 1.05 }}
                _active={{ scale: 0.95 }}
            >
                Contactez moi maintenant
            </Button>
            </MotionBox>
          </HStack>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}
