import { Box, Button, Center, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

const MotionBox = motion(Box);

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

            <Button
            as={Link}
            to="/contact"
            size="lg"
            colorScheme="primary"
            leftIcon={<FaComments />}
            borderRadius="full"
            boxShadow="md"
            _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
            _active={{ transform: "scale(0.95)" }}
            >
            Échanger rapidement
            </Button>
        </VStack>
      </MotionBox>
    </Center>
  );
}
