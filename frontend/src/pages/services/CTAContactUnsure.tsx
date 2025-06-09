import { Box, Button, Center, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function CTAContactUnsure() {
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.600");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Center py={12}>
      <MotionBox
        bg={bg}
        px={8}
        py={6}
        borderRadius="lg"
        boxShadow="lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <VStack spacing={4}>
          <Text fontSize="lg" textAlign="center" color={textColor}>
            ❓ Pas sûr de ce qui vous conviendrait ?{" "}
            <Text as="span" fontWeight="bold">
              Échangeons pour clarifier.
            </Text>
          </Text>

          <MotionButton
            as={Link}
            to="/contact"
            size="lg"
            colorScheme="primary"
            leftIcon={<FaComments />}
            borderRadius="full"
            boxShadow="md"
            whileHover={{ scale: 1.05, boxShadow: "lg" }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            Échanger rapidement
          </MotionButton>
        </VStack>
      </MotionBox>
    </Center>
  );
}
